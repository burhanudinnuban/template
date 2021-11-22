import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import './i18n/i18n';
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('title')}</Text>
      <Button
        title={t('description')}
        onPress={() => i18n.changeLanguage('id')}
      />
      <Button
        title={t('description')}
        onPress={() => i18n.changeLanguage('en')}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
