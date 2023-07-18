import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import styles from './JobDetails.style';
import {Company, About, Footer, Tabs, Specifics} from '../../components';
import {COLORS, SIZES} from '../../constants';
import useFetch from '../../hook/useFetch';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = ({route}: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {};

  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        );
      case 'About':
        return <About info={data[0].job_description ?? 'No data provided'} />;

      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        );

      default:
        break;
    }
  };

  const {id} = route.params;

  const {data, isLoading, error} = useFetch('job-details', {
    job_id: id,
  });

  const {container, applyBtn} = styles;

  return (
    <SafeAreaView style={container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Error: {error.message}</Text>
        ) : data.length === 0 ? (
          <Text>No data </Text>
        ) : (
          <View style={{padding: SIZES.medium, paddingBottom: 100}}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <View style={applyBtn}>
        <Footer
          url={
            data[0]?.job_google_link ?? 'http://carrers.google.com/jobs/results'
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default JobDetails;
