'use strict';

function addInfo() {
    let allStudentInfo = {id:{name:'陈伟',nation:'汉族',klass:'1202',mathGrade:'98',chineseGrade:'96',englishGrade:'98',programmingGrade:'69'}};
    let addStudentInfo = document.getElementById("addInfoText").value;
    let regexp = /^[\u4e00-\u9fa5]{2,},\d+,[\u4e00-\u9fa5]{2,},\d+,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?,\d+(\.\d+)?$/m;
    let studentInfoArr = addStudentInfo.split(',');
    if(regexp.test(addStudentInfo)){
        let id = studentInfoArr[1];
        allStudentInfo.id.name = studentInfoArr[0];
        allStudentInfo.id.nation = studentInfoArr[2];
        allStudentInfo.id.klass = studentInfoArr[3];
        allStudentInfo.id.mathGrade = studentInfoArr[4];
        allStudentInfo.id.chineseGrade = studentInfoArr[5];
        allStudentInfo.id.englishGrade = studentInfoArr[6];
        allStudentInfo.id.programmingGrade= studentInfoArr[7];
        allStudentInfo.id.perTotalGrade = perSum(studentInfoArr);
        allStudentInfo.id.perAverageGrade = perSum(studentInfoArr)/4;
        let studentObj = JSON.stringify(allStudentInfo.id);
        localStorage.setItem(id,studentObj);
        alert(`${allStudentInfo.id.name}信息添加成功！`);
        let searchInfoTab =
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
        $('#addId').append(searchInfoTab);
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
    let choosedIdInfo = document.getElementById("searchInfoText").value;
    let choosedIdArr = choosedIdInfo.split(',');
    for (let m in choosedIdArr) {
        if (isNaN(choosedIdArr[m])) {
            alert(`请按正确的格式输入学生的学号!`);
            break;
        } else {
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
            }
        }
}

/*
let searchInfoTab =
    "<tr>" +
    "<td>"+ localStorage.id.name+ "</td>" +
    "<td>" + choosedIdArr[m] + "</td>" +
    "<td>" + localStorage.id.nation+ "</td>" +
    "<td>" + localStorage.id.klass + "</td>" +
    "<td>" + localStorage.id.chineseGrade + "</td>" +
    "<td>" + localStorage.id.mathGrade + "</td>" +
    "<td>" + localStorage.id.englishGrade + "</td>" +
    "<td>" + localStorage.id.programmingGrade + "</td>" +
    "<td>" + localStorage.id.perTotalGrade + "</td>" +
    "<td>" + localStorage.id.perAverageGrade + "</td>" +
    "</tr>";
$('#searchId').append(searchInfoTab);
*/