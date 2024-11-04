import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {
    return (
        <Layout>
    <h1 className={utilStyles.headingXl}>404</h1>
    <p className={utilStyles.lightText}>Page Not Found</p>
    </Layout>
);
  }