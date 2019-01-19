import React, { memo } from 'react';
import { Card, Tabs, Row, Col } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';
import styles from './workflow.less';
import { IterationChart, Pie } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';

const OfflineData = memo(({ offlineWorkChartData }) => (
  <div style={{ padding: '0 24px' }}>
    <IterationChart
      height={600}
      data={offlineWorkChartData}
      titleMap={{
        y1: formatMessage({ id: 'app.analysis.traffic' }),
        y2: formatMessage({ id: 'app.analysis.payments' }),
      }}
    />
  </div>
));

export default OfflineData;
