"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var table_1 = require("../../../consts/table");
function BuildFields(_a) {
    var formik = _a.formik;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: table_1.tableRowOrder.map(function (cell) {
            return ((0, jsx_runtime_1.jsx)(material_1.TextField, { id: cell.prop, name: cell.prop, label: cell.label, error: !!formik.errors[cell.prop], helperText: formik.errors[cell.prop], value: formik.values[cell.prop], margin: "normal" }, cell.prop));
        }) }));
}
exports["default"] = BuildFields;
