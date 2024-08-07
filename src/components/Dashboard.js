import React from 'react';
import styled from 'styled-components';
import { FaChartLine, FaUsers, FaCog, FaBell } from 'react-icons/fa';
import { Line } from 'react-chartjs-2'; // For line charts
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Content = styled.main`
  margin-left: 30px;
  margin-top:60px;
  flex: 1;
  padding: 1rem;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Widget = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  flex: 1;
  min-width: 200px;
`;

const Chart = styled.div`
  height: 200px;
  width: 100%;
`;

const Dashboard = () => {
  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 20, 50, 40, 60, 70, 80],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return (
        
        <Content>
          <DashboardHeader>
            <Widget>
              <h2>Sales Overview</h2>
              <Chart>
                <Line data={data} />
              </Chart>
            </Widget>
            <Widget>
              <h2>Recent Activities</h2>
              <p>Activity 1: Details...</p>
              <p>Activity 2: Details...</p>
              <p>Activity 3: Details...</p>
            </Widget>
          </DashboardHeader>
          <Widget>
            <h2>System Health</h2>
            <p>Status: All systems operational</p>
            <p>Uptime: 99.99%</p>
          </Widget>
        </Content>
  );
};

export default Dashboard;
