import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';

const mock = {
  id: 1,
  title: 'djaklfdjalfd',
  descriprion: `Служба Яндекс.Рефераты предназначена для студентов и школьников, дизайнеров и журналистов, создателей научных заявок и отчетов — для всех, кто относится к тексту, как к количеству знаков.
  Нажав на кнопку «Написать реферат», вы лично создаете уникальный текст, причем именно от вашего нажатия на кнопку зависит, какой именно текст получится — таким образом, авторские права на реферат принадлежат только вам.`,
};

const DetailScreen = () => {
  return (
    <ScreenContainer>
      <>
        <Text style={styles.title}>{mock.title}</Text>
        <Text style={styles.description}>{mock.descriprion}</Text>
      </>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default DetailScreen;
