<template>
  <search-table>
    <template #condition>
      <simple-input label="名称" placeholder="请输入名称" @inputChange="name => params.pname = name" />
      <simple-input label="编号" placeholder="请输入编号" @inputChange="code => params.pcode = code" />
      <el-button type="primary" :loading="isLoading" @click="getPrjInfo">查询</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="handleCreate">新建</el-button>
    </template>
    <template #table>
      <el-table-column label="ID" prop="id" width="80" />
      <el-table-column label="标题" prop="title" width="100" />
      <el-table-column label="描述" prop="desc" width="150" />
      <el-table-column label="链接" width="200">
        <template #default="scope">
          <el-link :href="scope.row.url" :underline="false" type="primary" target="_blank">{{ scope.row.url }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="封面图" width="120">
        <template #default="scope">
          <el-image :src="scope.row.picUrl">
            <template #error>
              <div class="image-slot">
                <i class="el-icon-picture-outline" />
              </div>
            </template>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column label="编号" prop="pcode" width="120" />
      <el-table-column label="名称" prop="name" width="120" />
      <el-table-column label="自动推送" width="120">
        <template #default="scope">
          <el-switch v-model="scope.row.autopush" :loading="scope.row.loading" :before-change="() => beforeSwitchChange(scope.row)" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" class-name="operation-column">
        <template #default="scope">
          <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.row)" />
          <confirm @confirm="confirmDelete(scope.row)">
            <el-button class="del-btn" type="text" icon="el-icon-delete" />
          </confirm>
        </template>
      </el-table-column>
    </template>
    <template #pagination>
      <pagination ref="pagination" @pageNumChange="pageNumChange" />
    </template>
  </search-table>

  <simple-dialog
    ref="dialogRef"
    :title="title"
    @confirm="submitForm('formRef')"
    @close="clearForm"
  >
    <el-form ref="formRef" :model="formModel" :rules="rules" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input v-model="formModel.desc" placeholder="请输入描述" />
      </el-form-item>
      <el-form-item label="链接" prop="url">
        <el-input v-model="formModel.url" placeholder="请输入链接" />
      </el-form-item>
      <el-form-item label="封面图链接" prop="picUrl">
        <el-input v-model="formModel.picUrl" placeholder="请输入封面图链接" />
      </el-form-item>
      <el-form-item label="编号" prop="pcode">
        <el-input v-model="formModel.pcode" placeholder="请输入编号" />
      </el-form-item>
      <el-form-item label="自动推送(是/否)" prop="autopush">
        <el-switch v-model="formModel.autopush" />
      </el-form-item>
    </el-form>
  </simple-dialog>
</template>
<script>
import { provide, ref, onMounted, getCurrentInstance } from 'vue'
import SearchTable from 'components/search-table.vue'
import SimpleInput from 'components/simple-input.vue'
import Pagination from 'components/pagination.vue'
import SimpleDialog from 'components/simple-dialog.vue'
import Upload from 'components/upload.vue'
import Confirm from 'components/confirm.vue'
import useProject from 'composables/useProject'
export default {
  components: {
    SearchTable,
    SimpleInput,
    Pagination,
    SimpleDialog,
    Upload,
    Confirm
  },
  setup() {
    const pagination = ref(null)
    const { ctx } = getCurrentInstance()
    let params = {
      pname: '',
      pcode: ''
    }
    const { list, pageInfo, getPrjInfo } = useProject(params, ctx)
    provide('tableList', list)
    provide('pageInfo', pageInfo)
    const pageNumChange = num => {
      params.pageNumber = num
      getPrjInfo()
    }
    onMounted(() => {
      const { pageSize, pageNumber } = pagination.value.getPageInfo()
      params.pageSize = pageSize
      params.pageNumber = pageNumber
      getPrjInfo()
    })
    return { params, getPrjInfo, pagination, pageNumChange }
  },
  data() {
    const checkPcode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('编号不能为空'))
      }
    }
    return {
      formModel: {
        title: '',
        desc: '',
        url: '',
        picUrl: '',
        pcode: '',
        autopush: false
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        url: [{ required: true, message: '请输入超链接', trigger: 'blur' }],
        picUrl: [{ required: true, message: '请输入封面图链接', trigger: 'blur' }],
        pcode: [{ validator: checkPcode, trigger: 'blur' }]
      }
    }
  },
  computed: {
    title() {
      return this.action === 'create' ? '新建项目' : '修改项目'
    }
  },
  methods: {
    beforeSwitchChange(row) {
      row.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          row.loading = false
          this.$message.success()
          return resolve(true)
        }, 1000)
      })
    },
    confirmDelete(row) {
      console.log(row)
      this.$message.success()
    },
    handleCreate() {
      this.setAction('create')
      this.$refs.dialogRef.show()
    },
    handleEdit(row) {
      this.setAction('edit')
      this.formModel = { ...this.formModel, ...row }
      this.$refs.dialogRef.show()
    },
    clearForm() {
      this.formModel = {
        title: '',
        desc: '',
        url: '',
        picUrl: '',
        pcode: '',
        autopush: false
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    }
  }
}
</script>