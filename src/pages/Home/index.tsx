import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import styles from './index.less';

const HomePage = () => {
  const { name, setName } = useModel('global');
  return (
    <PageContainer ghost>
      <Button
        onClick={() => {
          setName(name + '1');
          console.log(b);
        }}
        type={'primary'}
      >
        click
      </Button>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
