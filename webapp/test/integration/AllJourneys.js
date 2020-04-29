/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"training3/training3/session/employeedetails/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"training3/training3/session/employeedetails/test/integration/pages/session3",
	"training3/training3/session/employeedetails/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "training3.training3.session.employeedetails.view.",
		autoWait: true
	});
});