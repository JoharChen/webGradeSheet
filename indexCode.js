'use strict';

// var data = {a: 1, b: 2, c: 3, d: 4}
// Object.keys(data);  // ["a", "b", "c", "d"]
// Object.values(data);    // [1, 2, 3, 4]

let keyArr = [];
for(let j=0; j<localStorage.length; j++) {
    keyArr.push(Object.keys(localStorage)[j]);
}

function load() {
    $("#addTable  tr:not(:first)").empty("");
    for(let i in keyArr){
            let value = JSON.parse(localStorage[keyArr[i]]);
            let searchInfoTab =
                "<tr>" +
                "<td>" + value.name + "</td>" +
                "<td>" + keyArr[i] + "</td>" +
                "<td>" + value.nation + "</td>" +
                "<td>" + value.klass + "</td>" +
                "<td>" + value.chineseGrade + "</td>" +
                "<td>" + value.mathGrade + "</td>" +
                "<td>" + value.englishGrade + "</td>" +
                "<td>" + value.programmingGrade + "</td>" +
                "<td>" + value.perTotalGrade + "</td>" +
                "<td>" + value.perAverageGrade + "</td>" +
                "</tr>";
            $('#addId').append(searchInfoTab);
    }
}


function addInfo() {
    let allStudentInfo = {id:{name:'陈伟',nation:'汉族',klass:'1202',chineseGrade:'96',mathGrade:'98',englishGrade:'98',programmingGrade:'69'}};
    let addStudentInfo = document.getElementById("addInfoText").value;
    let regexp = /^[\u4e00-\u9fa5]{2,},\d+,[\u4e00-\u9fa5]{2,},\d+,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?$/m;
    let studentInfoArr = addStudentInfo.split(',');
    if(regexp.test(addStudentInfo)){
        let id = studentInfoArr[1];
        if(keyArr.indexOf(id)>=0){
            alert(`该学生已存在，请输入正确的学生信息`);
        }else{
            allStudentInfo.id.name = studentInfoArr[0];
            allStudentInfo.id.nation = studentInfoArr[2];
            allStudentInfo.id.klass = studentInfoArr[3];
            allStudentInfo.id.chineseGrade = studentInfoArr[4];
            allStudentInfo.id.mathGrade = studentInfoArr[5];
            allStudentInfo.id.englishGrade = studentInfoArr[6];
            allStudentInfo.id.programmingGrade= studentInfoArr[7];
            allStudentInfo.id.perTotalGrade = perSum(studentInfoArr);
            allStudentInfo.id.perAverageGrade = perSum(studentInfoArr)/4;
            let studentObj = JSON.stringify(allStudentInfo.id);
            localStorage.setItem(id,studentObj);
            alert(`${allStudentInfo.id.name}信息添加成功！`);
            let addInfoTab =
                "<tr>" +
                "<td>" + allStudentInfo.id.name + "</td>" +
                "<td>" + id + "</td>" +
                "<td>" + allStudentInfo.id.nation + "</td>" +
                "<td>" + allStudentInfo.id.klass + "</td>" +
                "<td>" + allStudentInfo.id.chineseGrade + "</td>" +
                "<td>" + allStudentInfo.id.mathGrade + "</td>" +
                "<td>" + allStudentInfo.id.englishGrade + "</td>" +
                "<td>" + allStudentInfo.id.programmingGrade + "</td>" +
                "<td>" + allStudentInfo.id.perTotalGrade + "</td>" +
                "<td>" + allStudentInfo.id.perAverageGrade + "</td>" +
                "</tr>";
            $('#addId').append(addInfoTab);
            location.reload();
        }
    }else{
        alert(`请按正确的格式输入学生的信息`);
    }
}

//计算每个人的总成绩
function perSum(studentInfoArr) {
    let perTotalGrade =0;
    for(let m=4; m<8; m++){
        perTotalGrade+=parseFloat(studentInfoArr[m]);
    }
    return perTotalGrade;
}

function searchInfo() {
    $("#searchTable  tr:not(:first)").empty("");
    let choosedIdInfo = document.getElementById("searchInfoText").value;
    let choosedIdArr = choosedIdInfo.split(',');
    for (let m in choosedIdArr) {
        if (isNaN(choosedIdArr[m])) {
            alert(`请按正确的格式输入学生的学号!`);
            break;
        } else {
            if(keyArr.indexOf(choosedIdArr[m])>=0){
                let value = JSON.parse(localStorage[choosedIdArr[m]]);
                let searchInfoTab =
                    "<tr>" +
                    "<td>" + value.name + "</td>" +
                    "<td>" + choosedIdArr[m] + "</td>" +
                    "<td>" + value.nation + "</td>" +
                    "<td>" + value.klass + "</td>" +
                    "<td>" + value.chineseGrade + "</td>" +
                    "<td>" + value.mathGrade + "</td>" +
                    "<td>" + value.englishGrade + "</td>" +
                    "<td>" + value.programmingGrade + "</td>" +
                    "<td>" + value.perTotalGrade + "</td>" +
                    "<td>" + value.perAverageGrade + "</td>" +
                    "</tr>";
                $('#searchId').append(searchInfoTab);
            }else {
                alert(`查无此人`);
                break;
            }

            }
        }
}

function modifyInfo() {
        let allStudentInfo = {id:{name:'陈伟',nation:'汉族',klass:'1202',chineseGrade:'96',mathGrade:'98',englishGrade:'98',programmingGrade:'69'}};
        let addStudentInfo = document.getElementById("addInfoText").value;
        let regexp = /^[\u4e00-\u9fa5]{2,},\d+,[\u4e00-\u9fa5]{2,},\d+,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?$/m;
        let studentInfoArr = addStudentInfo.split(',');
        if(regexp.test(addStudentInfo)){
            let id = studentInfoArr[1];
            if(keyArr.indexOf(id)>=0){
                allStudentInfo.id.name = studentInfoArr[0];
                allStudentInfo.id.nation = studentInfoArr[2];
                allStudentInfo.id.klass = studentInfoArr[3];
                allStudentInfo.id.chineseGrade = studentInfoArr[4];
                allStudentInfo.id.mathGrade = studentInfoArr[5];
                allStudentInfo.id.englishGrade = studentInfoArr[6];
                allStudentInfo.id.programmingGrade= studentInfoArr[7];
                allStudentInfo.id.perTotalGrade = perSum(studentInfoArr);
                allStudentInfo.id.perAverageGrade = perSum(studentInfoArr)/4;
                let studentObj = JSON.stringify(allStudentInfo.id);
                localStorage.setItem(id,studentObj);
                alert(`${allStudentInfo.id.name}信息修改成功！`);
            }else{
                alert(`要修改的信息不存在，请输入正确的学生的信息`);
            }

        }else{
            alert(`请按正确的格式输入学生的信息`);
        }
        load();
}

function deleteInfo() {
    $("#searchTable  tr:not(:first)").empty("");
    let choosedIdInfo = document.getElementById("searchInfoText").value;
    let choosedIdArr = choosedIdInfo.split(',');
    for (let m in choosedIdArr) {
        if (isNaN(choosedIdArr[m])) {
            alert(`请按正确的格式输入学生的学号!`);
            break;
        } else {
            if(keyArr.indexOf(choosedIdArr[m])>=0){
                localStorage.removeItem([choosedIdArr[m]]);
                location.reload();
            }else{
                alert('要删除的学生不存在，请输入正确的学生信息');
                break;
            }
        }
    }
}