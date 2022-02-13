import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Row,

  } from "reactstrap";


function SkeletonExercise() {
    return (
        <>
        <Container className="pt-2">
            <Row>
                <Col lg="12">
                    <Card className="h-100 card-border-solid">
                        <CardTitle className="m-4 skeleton title" tag="h3"></CardTitle>
                        <CardBody className="text-black px-5">
                            <h4 className="skeleton header"></h4>
                            <h4 className="skeleton header"></h4>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default SkeletonExercise
