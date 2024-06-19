import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess, useModel } from '@umijs/max';
import { Button } from 'antd';

const AccessPage = () => {
  const access = useAccess();
  const { name } = useModel('global');
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      {name}
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
