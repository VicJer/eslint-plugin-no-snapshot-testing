"use strict"
const rule = require("../../../index").create,
    RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("no-snapshot-testing",rule,{
    valid:["expect().toBeArray()"],
    invalid:[
        {
            code: "expect().toMatchSnapshot()",
            errors:[{ messageId: 'notAllowed' }],
            output:"Snapshot testing is disallowed"
        },
        {
            code: "expect().toMatchInlineSnapshot()",
            errors:[{ messageId: 'notAllowed' }],
            output:"Snapshot testing is disallowed"
        }
    ]
})
