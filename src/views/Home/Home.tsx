import React from 'react';
import type {FC} from 'react';

import Container from '@/components/Container';
import Layout from '@/layout';
import QuestionsList from '@/widget/Home/List';
import ManipulateQuestionModal from '@/widget/Home/ManipulateModal';

const Home: FC<Record<string, unknown>> = () => {
  return (
    <Layout>
      <Container className="py-5 px-2">
        <QuestionsList />
        <ManipulateQuestionModal />
      </Container>
    </Layout>
  );
};

export default Home;
