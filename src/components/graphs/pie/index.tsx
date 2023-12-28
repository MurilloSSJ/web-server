import { FlexContainer } from '@/components/containers/flexContainer'
import { WrapperContainer } from '@/components/containers/wrapperContainer/styles'
import ReactECharts from 'echarts-for-react'
import { GraphHeader } from '../graphHeader'
const PieChart = () => {
    const options = {
        title: {
            text: 'Quantidades de clientes:',
            subtext: 'Valor relativo para cada clientes',
            x: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} <br/>{a} : {c} ({d}%)',
        },
        legend: {
            orient: 'horizontal', // Altere para 'horizontal'
            bottom: 'bottom',
            data: ['Projeto1', 'Projeto2', 'Projeto3', 'Projeto4'],
        },
        series: [
            {
                name: 'Clientes',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: [
                    { name: 'Projeto1', value: 25 },
                    { name: 'Projeto2', value: 25 },
                    { name: 'Projeto3', value: 32 },
                    { name: 'Projeto4', value: 25 },
                ],
            },
        ],
    }
    return (
        <WrapperContainer padding={false}>
            <FlexContainer justifyContent='start' alignItems='start'>
                <GraphHeader title='Teste' description='' />
            </FlexContainer>
            <FlexContainer>
                <ReactECharts option={options} style={{ height: '20rem', width: '50%' }} />
            </FlexContainer>
        </WrapperContainer>
    )
}
export default PieChart
