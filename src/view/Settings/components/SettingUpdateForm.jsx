import { useFormik } from "formik";
import { Input, Button, Row, Col, Select, Switch, Typography } from "antd";
import InputLabelWrapper from "../../../components/Input/InputLabelWrapper";
import {
  initialSettingData,
  settingValidationSchema,
} from "../../../utils/constant";
import { useState } from "react";

const SettingUpdateForm = () => {
  const [settingData, setSettingData] = useState(initialSettingData);
  const formik = useFormik({
    initialValues: settingData,
    validationSchema: settingValidationSchema,
    onSubmit: (values) => {
      console.log("Form Data", values);
      setSettingData(values);
    },
  });

  return (
    <form className="drawer-form-wrapper" onSubmit={formik.handleSubmit}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <InputLabelWrapper label="Site Name">
            <Input
              placeholder="Enter site name"
              name="siteName"
              value={formik.values.siteName}
              onChange={formik.handleChange}
              status={
                formik.errors.siteName && formik.touched.siteName ? "error" : ""
              }
            />
            {formik.touched.siteName && formik.errors.siteName ? (
              <Typography.Text
                style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
              >
                {formik.errors.siteName}
              </Typography.Text>
            ) : (
              ""
            )}
          </InputLabelWrapper>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <InputLabelWrapper label="Theme Mode">
            <Select
              name="themeMode"
              value={formik.values.themeMode}
              onChange={(value) => formik.setFieldValue("themeMode", value)}
            >
              <Select.Option value="Light">Normal</Select.Option>
              <Select.Option value="Dark">Dark</Select.Option>
            </Select>
            {formik.touched.themeMode && formik.errors.themeMode ? (
              <Typography.Text
                style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
              >
                {formik.errors.themeMode}
              </Typography.Text>
            ) : (
              ""
            )}
          </InputLabelWrapper>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <InputLabelWrapper label="Theme Color">
            <Input
              placeholder="Enter theme color"
              name="themeColor"
              value={formik.values.themeColor}
              onChange={formik.handleChange}
            />
            {formik.touched.themeColor && formik.errors.themeColor ? (
              <Typography.Text
                style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
              >
                {formik.errors.themeColor}
              </Typography.Text>
            ) : (
              ""
            )}
          </InputLabelWrapper>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <InputLabelWrapper label="Enable Notifications">
            <Switch
              style={{ width: "fit-content" }}
              name="notificationsEnabled"
              checked={formik.values.notificationsEnabled}
              onChange={(checked) =>
                formik.setFieldValue("notificationsEnabled", checked)
              }
            />
            {formik.touched.notificationsEnabled &&
            formik.errors.notificationsEnabled ? (
              <Typography.Text
                style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
              >
                {formik.errors.notificationsEnabled}
              </Typography.Text>
            ) : (
              ""
            )}
          </InputLabelWrapper>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <InputLabelWrapper label="Default Language">
            <Select
              name="defaultLanguage"
              value={formik.values.defaultLanguage}
              onChange={(value) =>
                formik.setFieldValue("defaultLanguage", value)
              }
            >
              <Select.Option value="English">English</Select.Option>
              <Select.Option value="Spanish">Spanish</Select.Option>
              <Select.Option value="French">French</Select.Option>
            </Select>
            {formik.touched.defaultLanguage && formik.errors.defaultLanguage ? (
              <Typography.Text
                style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
              >
                {formik.errors.defaultLanguage}
              </Typography.Text>
            ) : (
              ""
            )}
          </InputLabelWrapper>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <InputLabelWrapper label="Time Zone">
            <Select
              name="timeZone"
              value={formik.values.timeZone}
              onChange={(value) => formik.setFieldValue("timeZone", value)}
            >
              <Select.Option value="GMT">GMT</Select.Option>
              <Select.Option value="EST">EST</Select.Option>
              <Select.Option value="PST">PST</Select.Option>
            </Select>
            {formik.touched.timeZone && formik.errors.timeZone ? (
              <Typography.Text
                style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
              >
                {formik.errors.timeZone}
              </Typography.Text>
            ) : (
              ""
            )}
          </InputLabelWrapper>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <InputLabelWrapper label="Privacy Mode">
            <Switch
              style={{ width: "fit-content" }}
              name="privacyMode"
              checked={formik.values.privacyMode}
              onChange={(checked) =>
                formik.setFieldValue("privacyMode", checked)
              }
            />
            {formik.touched.privacyMode && formik.errors.privacyMode ? (
              <Typography.Text
                style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
              >
                {formik.errors.privacyMode}
              </Typography.Text>
            ) : (
              ""
            )}
          </InputLabelWrapper>
        </Col>

        <Col xs={24}>
          <Button type="primary" htmlType="submit">
            Update Settings
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default SettingUpdateForm;
