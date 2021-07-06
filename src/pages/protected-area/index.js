import { Redirect } from "react-router-dom";

import { Layout } from "@/components";
import { Title } from "@/styles/shared";
import { useAuth } from "@/contexts";

const ProtectedArea = () => {
  const { signed } = useAuth();

  if (signed) {
    return (<Redirect to="/capture"/>);
  }

  return (
    <Layout>
      <Title>Please, sign in to get access to this page.</Title>
    </Layout>
  );
};

export default ProtectedArea;
