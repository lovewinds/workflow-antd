import React, { memo } from 'react';
import { Card, Tabs, Row, Col } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';
import styles from './workflow.less';
import { TimelineChart, Pie } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';

const OfflineData = memo(({ offlineWorkChartData }) => (
  <div style={{ padding: '0 24px' }}>
    <TimelineChart
      height={300}
      data={offlineWorkChartData}
      titleMap={{
        y1: formatMessage({ id: 'app.analysis.traffic' }),
        y2: formatMessage({ id: 'app.analysis.payments' }),
      }}
    />
  </div>
));

export default OfflineData;
