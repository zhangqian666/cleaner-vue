<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-pie-chart"></i> 台账表图
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <div class="schart-box">
            <div class="content-title">垃圾体积（天）</div>
            <schart width="auto" class="schart" canvasId="line" :options="options1"></schart>
        </div>
        <div class="schart-box">
            <div class="content-title">垃圾体积（周）</div>
            <schart class="schart" canvasId="line2" :options="options2"></schart>
        </div>
    </div>
</div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    name: '台账表图',
    components: {
        Schart
    },
    data() {
        return {
            options1: {
                type: 'line',
                title: {
                    text: '体积（天）'
                },
                bgColor: '#fbfbfb',
                labels: ['12/1', '12/2', '12/3', '12/4', '12/5', "12/6", "12/7",
                    "12/8", "12/9", "12/10", "12/11", "12/12", "12/13", "12/14"
                ],
                datasets: [{
                        label: '可回收物（L）',
                        data: [45, 46, 47, 80, 56, 40, 42, 55, 54, 56, 58, 42, 47, 45]
                    },
                    {
                        label: '干垃圾（L）',
                        data: [66, 85, 65, 80, 75, 56, 88, 65, 56, 58, 78, 85, 72, 71]
                    },
                    {
                        label: '有害垃圾（L）',
                        data: [15, 25, 16, 18, 21, 21, 13, 15, 11, 15, 18, 25, 20, 18]
                    }

                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '体积（周）'
                },
                bgColor: '#fbfbfb',
                labels: ['第1周', '第2周', '第3周', '第4周', '第5周', "第6周", "第7周",
                    "第8周", "第9周", "第10周", "第11周", "第12周", "第13周", "第14周"
                ],
                datasets: [{
                        label: '可回收物',
                        data: [520, 580, 327, 457, 303, 409, 413, 291, 405, 246, 101, 268, 523, 501]
                    },
                    {
                        label: '干垃圾',
                        data: [423, 586, 427, 457, 423, 469, 473, 491, 415, 396, 421, 368, 423, 501]
                    },
                    {
                        label: '有害垃圾',
                        data: [150, 135, 140, 118, 121, 121, 113, 115, 111, 115, 118, 125, 120, 118]
                    }

                ]
            }
        };

    }
};
</script>

<style scoped>
.schart-box {
    display: inline-block;
    margin: 20px;
}

.schart {
    width: 600px;
    height: 400px;
}

.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>
