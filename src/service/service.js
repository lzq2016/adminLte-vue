import Axios from 'axios';

const url = 'http://';
const MAX_SIZE = 999999;

const axios = Axios.create({
    baseURL: url,
    timeout: 10000,
    withCredentials: true
});

const services = {
    page:{
        getSelection(year, config = {}) {
            return axios.get('tag/add.do', {
                params: {
                    year,
                },
            }, config);
        },
        search(params, config = {}) {
            return axios.get('tag/add.do', {
                params,
            }, config);
        }
    },
    page1:{
        search(params, config = {}) {
            return axios.get('tag/add.do', {
                params,
            }, config);
        }
    },
    page2:{
        search(params, config = {}) {
            return axios.get('tag/add.do', {
                params,
            }, config);
        }
    },
    page6:{
        search(params, config = {}) {
            return axios.get('tag/add.do', {
                params,
            }, config);
        }
    },
    tag: {
        add(name, config = {}) {
            return axios.get('tag/add.do', {
                params: {
                    name,
                },
            }, config);
        },
        delete(id, config = {}) {
            return axios.get('tag/delete.do', {
                params: {
                    id,
                },
            }, config);
        },
        search(params = {}, config = {}) {
            return axios.get('tag/search.do', {
                params,
            }, config);
        },
        all(config) {
            return services.tag.search({
                params: {
                    start: 0,
                    size: MAX_SIZE,
                },
            }, config);
        },
        listAllByCurseId(id, config = {}) {
            return axios.get('tag/search.do', {
                params: {
                    cid: id,
                    start: 0,
                    size: MAX_SIZE,
                },
            }, config);
        },
        viewAppendCount(id, config) {
            return axios.get('tag/ viewAppenderCount.do', {
                params: {
                    id,
                },
            }, config);
        },
    },
    uploader: {
        image(image, config) {
            const formData = new FormData();
            formData.append('img', image);
            return axios.post('pic/add.do', formData, config);
        },
    },
    user: {
        login(params, config) {
            return axios.get('teacher/login.do', {
                params,
            }, config);
        }
    },
    teacher: {
        search(params, config) {
            return axios.get('teacher/search.do', {
                params,
            }, config);
        },
        listLesson(params, config) {
            return axios.get('teacher/listMyLesson.do', {
                params,
            }, config);
        },
        list(params, config) {
            return services.teacher.search(params, config);
        },
        get(username, config) {
            return axios.get('teacher/get.do', {
                params: {
                    username,
                },
            }, config);
        },
        signTag(params, config) {
            return axios.get('teacher/addTags.do', {
                params,
            }, config);
        },
        getTags(username, config) {
            return axios.get('teacher/listTags.do', {
                params: {
                    username,
                },
            }, config);
        },
        cur(config) {
            return axios.get('teacher/cur.do', {}, config);
        },
        logout(config) {
            return axios.get('teacher/logout.do', {}, config);
        },
    },
    course: {
        /**
         * 创建课程
         **/
        add(params = {}, config = {}) {
            return axios.get('course/add.do', {
                params,
            }, config);
        },
        /**
         * 通过课程 id 获取课程信息
         **/
        getById(id, config = {}) {
            return axios.get('course/get.do', {
                params: {
                    id,
                },
            }, config);
        },
        /**
         * 筛选课程
         **/
        search(params = {}, config = {}) {
            return axios.get('course/search.do', {
                params,
            }, config);
        },
        /**
         * 获取所有课程
         **/
        getAll(config) {
            return services.course.search({
                start: 0,
                size: MAX_SIZE,
                noRef: true,
            }, config);
        },
        getByTeacher(username, config) {
            return axios('teacher/ listMyCourse.do', {
                params: {
                    username,
                },
            }, config);
        },
        /**
         * 删除课程
         **/
        delete(id, config) {
            return axios.get('course/delete.do', {
                params: {
                    id,
                },
            }, config);
        },
        update(params = {}, config = {}) {
            return axios.get('course/update.do', {
                params,
            }, config);
        },
    },
    lesson: {
        search(params = {}, config = {}) {
            return axios.get('lesson/search.do', {
                params,
            }, config);
        },
        searchByFilter(params = {}, config = {}) {
            return axios.get('lessontime/search.do', {
                params,
            }, config);
        },
        add(params, config) {
            return axios.post('lesson/add.do', params, config);
        },
        addNote(params, config) {
            return axios.get('lessontime/addNote.do', { params, },
                config);
        },
        getById(id, config = {}) {
            return axios.get('lesson/get.do', {
                params: {
                    id,
                },
            }, config);
        },
        getLessonInfo(lid, config = {}) {
            return axios.get('lessontime/getLessonInfo.do', {
                params: {
                    lid,
                },
            }, config);
        },
        update(params = {}, config = {}) {
            return axios.get('lesson/update.do', {
                params,
            }, config);
        },
    },
    school: {
        list(config) {
            return axios.get('school/listSchools.do', {}, config);
        },
    },
    student: {
        listBySchool(params, config) {
            return axios.get('lessontime/listUser.do', {
                params,
            }, config);
        },
        sendFeedBack(params, config) {
            return axios.get('lessontime/sendReport.do', {
                params,
            }, config);
        },
    }
};

export {
    services as
    default
};