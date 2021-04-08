import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { axiosClient } from '../../../config/axios';
import { setData } from '../../../context/actions/files.actions';
import { setUserAuth } from '../../../context/actions/user.actions';
import { authToken } from '../../../functions';
import AverageAges from '../../molecules/AverageAges/AverageAges';
import AverageCost from '../../molecules/AverageCost/AverageCost';
import ClientsConcurrence from '../../molecules/ClientsConcurrence/ClientsConcurrence';
import ClientsCosts from '../../molecules/ClientsCosts/ClientsCosts';
import Employees from '../../molecules/Employees/Employees';
import EmployeesPosition from '../../molecules/EmployeesPosition/EmployeesPosition';
import FirstChart from '../../molecules/FirstChart/FirstChart';
import FourthChart from '../../molecules/FourthChart/FourthChart';
import SalesLine from '../../molecules/SalesLine/SalesLine';
import EmployeeTable from '../EmployeesTable/EmployeesTable';
import SalesTable from '../SalesTable/SalesTable';

import { StatisticsDiv } from './Statistics.styles';

const Statistics = () => {
  const dispatch = useDispatch();

  // const { sales } = useSelector((state: AppCtx) => state.files);

  useEffect(() => {
    const main = async () => {
      const token = localStorage.getItem('token');
      authToken(token);

      const response = await axiosClient.post('/auth/verifyUser');
      dispatch(setUserAuth(response.data, { mail: response.data.mail }));
      dispatch(setData());
    };

    main();
  }, []);

  return (
    <StatisticsDiv>
      <div className="grid">
        <FirstChart />
        <AverageCost />
        <FourthChart />

        <SalesLine />

        <EmployeesPosition />
        <AverageAges />

        <Employees />

        <ClientsConcurrence />
        <ClientsCosts />

        <SalesTable />

        <EmployeeTable />
      </div>
    </StatisticsDiv>
  );
};

export default Statistics;
