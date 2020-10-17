const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const download = require('download-git-repo');
const ora = require('ora');
const question = [
    {
        type: "list",
        message: "请选择项目类型",
        choices: [
            "web pc",
            "web app"
        ],
        name: "type"
    },
    {
        type: "list",
        message: "请选择ui框架",
        choices: [
            'ElementUI',
            'IView',
            'AntdVue'
        ],
        name: "ui",
        when(res) {
            //当判断上一个选择答案是pc端时出现
            return res.type === "web pc"
        }
    },
    {
        type: "list",
        message: "请选择ui框架",
        choices: [
            'vux',
            'mintui'
        ],
        name: "ui",
        when(res) {
            //当判断上一个选择答案是移动端时出现
            return res.type === "web app"
        }
    },
    {
        type: "list",
        message: "请选择项目预设",
        choices: [
            "默认",
            "自定义"
        ],
        name: "preset"
    },
    {
        type: "checkbox",
        message: "请选择项目功能",
        default: ['Bable'],
        choices: [
            "Bable",
            "Vuex",
            "Router",
            "CSS Pre-processors"
        ],
        name: "features",
        when(res) {
            return res.preset === '自定义'
        }
    },
    {
        type: "confirm",
        message: "是否使用history路由",
        when(res) {
            return res.features.indexOf('Router') !== -1
        },
        name: "mode"
    },
    {
        type: "list",
        message: "请选择要使用css预处理器",
        choices: [
            "less",
            "scss",
            "sass"
        ],
        name: "cssPre",
        when(res) {
            return res.features.indexOf('CSS Pre-processors') !== -1
        }
    },
    {
        type: "confirm",
        message: "是否保存当前预设",
        name: 'save',
        default: false,
        when(res) {
            return res.preset === '自定义'
        }
    },
    {
        type: "input",
        name: "presentName",
        message: "输入当前预设名称",
        when(res) {
            return res.save
        }
    }
]
const create = function (name) {
    //弹出问题的弹框，，
    inquirer.prompt(question).then((answer) => {
        const spinner = ora("正在构建项目").start()
        console.log(123)
        console.log(Object.keys(answer))
        console.log(answer);
    })

}

const productUpdate = {

}

module.exports = create