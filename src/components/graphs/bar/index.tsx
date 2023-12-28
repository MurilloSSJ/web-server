import { FlexContainer } from "@/components/containers/flexContainer"
import { WrapperContainer } from "@/components/containers/wrapperContainer/styles"
import ReactECharts from 'echarts-for-react'
import { GraphHeader } from "../graphHeader"

interface BarGraphProps {
    description?: string
    data: number[]
    labels: string[]
    title: string
    height?: number
    width?: number
    color?: string
    gradient?: boolean
}

export const BarGraph = ({ description, data, labels, title, height, width, color, gradient }: BarGraphProps) => {
    const options = {
        width: '90%',
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Faturamento'],
        },
        xAxis: {
            type: 'category',
            data: [
                { value: 'Jan' },
                { value: 'Fev' },
                { value: 'Mar' },
                { value: 'Abr' },
                { value: 'Mai' },
                { value: 'Jun' },
                { value: 'Jul' },
                { value: 'Ago' },
                { value: 'Set' },
                { value: 'Out' },
                { value: 'Nov' },
                { value: 'Dez' },
            ],
            splitLine: {
                show: true,
            },
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'Faturamento',
                type: 'line',
                colorBy: 'data',
                symbolSize: '10',
                data: [5, 20, 36, 15, 10, 5, 1000, 7000, 9, 1000, 11, 100],
            },
        ],
    }
    return (
        <WrapperContainer padding={false}>
            <FlexContainer>
                <GraphHeader title={title} description={description} />
            </FlexContainer>
            <FlexContainer>
                <ReactECharts
                    option={options}
                    style={{ width: '95%', height: '400px' }}
                />
            </FlexContainer>
        </WrapperContainer>
    )
}