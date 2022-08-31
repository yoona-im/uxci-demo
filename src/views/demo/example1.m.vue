<template>
   <div class="page_container">
        <el-form :model="searchForm" ref="searchForm" label-width="100px" size="small">
            <div class="search_row">
                <div>
                    <el-form-item label="患者姓名：" prop="name">
                        <el-input v-model="searchForm.name" placeholder="请输入患者姓名" :maxlength="30"></el-input>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item label="身份证号：" prop="idCard">
                        <el-input v-model="searchForm.idCard" placeholder="请输入身份证号" :maxlength="20"></el-input>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item label="联系电话：" prop="patientPhone">
                        <el-input v-model="searchForm.patientPhone" placeholder="请输入联系电话" :maxlength="15"></el-input>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item label="社保卡号：" prop="cardNo">
                        <el-input v-model="searchForm.cardNo" placeholder="请输入社保卡号" :maxlength="20"></el-input>
                    </el-form-item>
                </div>
                <div class="btns">
                    <el-form-item label-width="20px">
                        <el-button @click="resetForm" class="fl">重置</el-button>
                        <el-button type="primary" @click="formSearch" class="fl">查询</el-button>
                        <el-button type="primary" class="fr" @click="toPage">跳转</el-button>
                    </el-form-item>
                </div>
            </div>
        </el-form>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" size="small"
        :header-cell-style="{
                    background:'#EBF4FF',
                    color: '#333',
                    fontWeight: 'bold',
                    height: '40px',
                    padding: 0,
                    fontSize: '14px'
                }" class="search-table" height="500" 
        element-loading-text="加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="hsla(0,0%,100%,.9)" :cell-style="{color: '#333', fontSize: '14px'}" height="calc(100% - 100px)">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="mpiId" label="主索引号" show-overflow-tooltip min-width="220">
        </el-table-column>
        <el-table-column prop="healthInsuranceCardId" label="社保卡号" show-overflow-tooltip min-width="100">
        </el-table-column>
        <el-table-column prop="name" label="患者姓名"  min-width="70" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="sexName" label="性别" min-width="50">
            <template slot-scope="scope">
                <span>{{scope.row.sexName || scope.row.sex }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="birthDate" label="出生日期" min-width="90">
            <template slot-scope="scope">
                <span>{{scope.row.birthDate && scope.row.birthDate.slice(0, 10)}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="idCard" label="身份证号" show-overflow-tooltip min-width="120">
        </el-table-column>
        <el-table-column prop="patientPhone" label="联系电话" min-width="100">
        </el-table-column>
        <el-table-column label="操作" class-name="action">
            <template slot-scope="scope">
                <el-tooltip effect="dark" content="详情" placement="bottom">
                    <span class="operate-icon operate-icon1 hand co_blue">
                        <i class="iconfont icon-ic_more"></i>
                    </span>
                </el-tooltip>
            </template>
        </el-table-column>
    </el-table>
     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNo"
        :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" class="flex_end p16">
    </el-pagination>
   </div>
   
</template>
<script>
import { onOpen } from '../../utils/utils.m'
import { queryListData } from '../../api/service';
import { statusEnum } from '../../enums/enums.m.js';
import "../../style/main.m.scss";
export default {
    components: {
    },
    data() {
        return {
            searchForm: {
                name: '',
                idCard: '',
                patientPhone: '',
                cardNo: ''
            },
            pageNo: 1,
            pageSize: 10,
            currentPage: 1,
            total: '',
            tableData: [],
        }
    },
    methods: {
        formSearch() {
            this.pageNo = 1;
            this.queryMainIndexList();
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.pageNo = 1;
            this.queryMainIndexList();
        },
        handleCurrentChange(val) {
            this.pageNo = val;
            this.queryMainIndexList();
        },
        resetForm() {
            this.$refs.searchForm.resetFields();
            this.pageNo = 1;
            this.pageSize = 10;
            this.queryMainIndexList();
        },
        queryMainIndexList() {
            let me = this;
            me.tableLoading = true;
            let params = {
                pageNum: me.pageNo,
                pageSize: me.pageSize,
                isTc: false
            }
            Object.assign(params, me.searchForm)
            $ajax({
                url: 'api/mpiview.mpiManageRpcService/selectPatientInfoByParamsForPage',
                jsonData: [params]
            }).then(function (res) {
                if (res && res.code == 200) {
                   me.tableData = res.body.list;
                   me.pageSize = res.body.pageSize;
                   me.total = res.body.total;
                   me.pageNo = res.body.pageNum;
                }
                me.tableLoading = false;
            }).fail(function (e) {
                console.error(e);
                me.tableLoading = false;
            })
        },
        toPage() {
            onOpen('app1', 'vueComp1')
        },
        requestTest() {
            let params = {
                pageNum: this.pageNo,
                pageSize: this.pageSize,
                isTc: false
            }
            Object.assign(params, this.searchForm)
            queryListData([params]).then((res) => {
              if (res && res.code == 200) {
                console.log(res)
              }
            });
        }
    },
    created() {
        this.queryMainIndexList()
        this.requestTest()
    }
}
</script>
<style lang="scss" scoped>
.page_container {
    padding: 20px;
    height: 100%;
    .search_row {
        display: flex;
        &>div {
            width: 20%;
        }
        .btns {
            min-width: 215px;
        }
    }
}
</style>