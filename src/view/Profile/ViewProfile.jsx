import { Row, Col, Input } from "antd";
import InputLabelWrapper from "../../components/Input/InputLabelWrapper";
import { userProfileData } from "../../utils/constant";

const ViewProfile = () => {
  const userProfile = userProfileData;
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <InputLabelWrapper label="ID">
            <Input value={userProfile.id} disabled />
          </InputLabelWrapper>
        </Col>
        <Col xs={24} sm={12}>
          <InputLabelWrapper label="First Name">
            <Input value={userProfile.personalInfo.firstName} disabled />
          </InputLabelWrapper>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <InputLabelWrapper label="Last Name">
            <Input value={userProfile.personalInfo.lastName} disabled />
          </InputLabelWrapper>
        </Col>
        <Col xs={24} sm={12}>
          <InputLabelWrapper label="Email">
            <Input value={userProfile.personalInfo.email} disabled />
          </InputLabelWrapper>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <InputLabelWrapper label="Plan Name">
            <Input value={userProfile.hostingPlan.planName} disabled />
          </InputLabelWrapper>
        </Col>
        <Col xs={24} sm={12}>
          <InputLabelWrapper label="Status">
            <Input value={userProfile.hostingPlan.status} disabled />
          </InputLabelWrapper>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <InputLabelWrapper label="Start Date">
            <Input value={userProfile.hostingPlan.startDate} disabled />
          </InputLabelWrapper>
        </Col>
        <Col xs={24} sm={12}>
          <InputLabelWrapper label="Last Payment Date">
            <Input value={userProfile.billingInfo.lastPaymentDate} disabled />
          </InputLabelWrapper>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24}>
          <InputLabelWrapper label="Total Paid">
            <Input value={userProfile.billingInfo.totalPaid} disabled />
          </InputLabelWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default ViewProfile;
