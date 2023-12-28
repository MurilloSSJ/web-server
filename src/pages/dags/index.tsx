import { AddButton } from "@/components/buttons/addButton"
import { FlexContainer } from "@/components/containers/flexContainer"
import { Table } from "@/components/tables"
import { SectionTitle } from "@/components/texts/sectionTitle"

const DagPage = () => {
    const mock_data = [
        [
            { "type": "text", "value": "dag1" },
            { "type": "text", "value": "template1" },
            { "type": "status", "value": true },
            { "type": "actions", "value": true }
        ],
        [
            { "type": "text", "value": "dag2" },
            { "type": "text", "value": "template1" },
            { "type": "status", "value": true },
            { "type": "actions", "value": true }
        ],
        [
            { "type": "text", "value": "dag2" },
            { "type": "text", "value": "template1" },
            { "type": "status", "value": true },
            { "type": "actions", "value": true }
        ]
    ]
    return (
        <FlexContainer direction="col" alignItems="center" dark height="screen" paddingX={50} paddingY={50} gapY={100}>
            <AddButton position="absolute" top={50} right={50} />
            <SectionTitle text="Dags" gradient="primary" />
            <Table columns={["Name", "Template", "Status", "Actions"]} data={mock_data}></Table>
        </FlexContainer>
    )
}

export default DagPage