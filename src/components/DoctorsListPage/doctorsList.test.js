import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mapStateToProps } from "./DoctorsListContainer";
import renderer from "react-test-renderer";
import DoctorsList from "./DoctorsList";

describe(`Doctors List Page`, () => {
  const appState = {
    doctorsList: [
      {
        id: 1,
        firstName: "Michel",
        lastName: "B",
        middleName: "M",
        birthDate: "1678-05-27",
        phone: "+79975669",
      },
      {
        id: 2,
        firstName: "Sam",
        lastName: "S",
        middleName: "K",
        birthDate: "2020-09-18",
        phone: "+7495",
      },
    ],
  };

  describe("MapStateToProps", () => {
    it("Should map the state to props correctly", () => {
      const ownProps = {};
      const componentState = mapStateToProps(appState, ownProps);
      expect(componentState.doctorsList[0].birthDate).toBe("27/05/1678");
    });
  });

  describe("Doctors list", () => {
    it("should not regress", () => {
      const tree = renderer.create(
        <MemoryRouter>
          <DoctorsList doctors={appState.doctorsList} />
        </MemoryRouter>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
