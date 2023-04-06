import { Row, Col, Card } from 'uiw';
import LineChart from './LineChart/index'
import BarChart from './BarChart/index'
import PieChart from './PieChart/index'


const Home = () => {
  return (
    <>
      <Row gutter={10} style={{ marginBottom: 10 }}>
        <Col span="8">
          <Card title='基础折线图'>
            <LineChart />
          </Card>
        </Col>
        <Col span="8">
          <Card title='基础柱状图'>
            <BarChart />
          </Card>
        </Col>
        <Col span="8">
          <Card title='基础饼图'>
            <PieChart />
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default Home;