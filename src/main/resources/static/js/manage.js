var totalPage;
var currPage;
var totalOplog;
function showBOOK()
{
    $("#mytable thead").empty();
    $("<tr></tr>").append($("<th></th>").append("索书号")).append($("<th></th>").append("分类号")).append($("<th></th>").append("ISBN"))
        .append($("<th></th>").append("题名")).append($("<th></th>").append("并列书名")).append($("<th></th>").append("第一责任者"))
        .append($("<th></th>").append("其他责任者")).append($("<th></th>").append("版本")).append($("<th></th>").append("出版社"))
        .append($("<th></th>").append("出版日期或发行日期")).append($("<th></th>").append("页数")).append($("<th></th>").append("定价"))
        .append($("<th></th>").append("当前库存册书")).append($("<th></th>").append("登记册书")).append($("<th></th>").append("编目员"))
        .append($("<th></th>").append("注销否")).append($("<th></th>").append("图书条形码号")).append($("<th></th>").append("图书出借否"))
        .append($("<th></th>").append("图书出借日期")).append($("<th></th>").append("图书归还日期")).append($("<th></th>").append("借书证编号"))
        .append($("<th></th>").append("挂失标志")).append($("<th></th>").append("挂失日期")).append($("<th></th>").append("Edit"))
        .appendTo("#mytable thead");
}
function showBOOKs()
{
    $("#mytable thead").empty();
    $("<tr></tr>").append($("<th></th>").append("索书号")).append($("<th></th>").append("分类号")).append($("<th></th>").append("ISBN"))
        .append($("<th></th>").append("题名")).append($("<th></th>").append("并列书名")).append($("<th></th>").append("第一责任者"))
        .append($("<th></th>").append("其他责任者")).append($("<th></th>").append("版本")).append($("<th></th>").append("出版社"))
        .append($("<th></th>").append("出版日期或发行日期")).append($("<th></th>").append("页数")).append($("<th></th>").append("定价"))
        .append($("<th></th>").append("当前库存册书")).append($("<th></th>").append("登记册书"))
        .appendTo("#mytable thead");
}
$("#searchBook").click(function () {
    showBOOK();
    showBookPage(1);
});
function showUSER()
{
    $("#mytable thead").empty();
    $("<tr></tr>").append($("<th></th>").append("借书证编号")).append($("<th></th>").append("借书证条形码号")).append($("<th></th>").append("姓名"))
        .append($("<th></th>").append("办理日期")).append($("<th></th>").append("已借阅书本数量")).append($("<th></th>").append("注销标志"))
        .append($("<th></th>").append("注销日期")).append($("<th></th>").append("年龄")).append($("<th></th>").append("性别"))
        .append($("<th></th>").append("身份证号")).append($("<th></th>").append("联系电话")).append($("<th></th>").append("借书限额"))
        .append($("<th></th>").append("罚款未付标志")).append($("<th></th>").append("罚款未付金额")).append($("<th></th>").append("学院"))
        .append($("<th></th>").append("专业")).append($("<th></th>").append("Edit"))
        .appendTo("#mytable thead");
}
function showUSERs()
{
    $("#mytable thead").empty();
    $("<tr></tr>").append($("<th></th>").append("借书证编号")).append($("<th></th>").append("借书证条形码号")).append($("<th></th>").append("姓名"))
        .append($("<th></th>").append("办理日期")).append($("<th></th>").append("已借阅书本数量")).append($("<th></th>").append("注销标志"))
        .append($("<th></th>").append("注销日期")).append($("<th></th>").append("年龄")).append($("<th></th>").append("性别"))
        .append($("<th></th>").append("身份证号")).append($("<th></th>").append("联系电话")).append($("<th></th>").append("借书限额"))
        .appendTo("#mytable thead");
}
$("#searchUser").click(function () {
    showUSER();
    showUserPage(1);
});
function showOPLOG()
{
    $("#mytable thead").empty();
    $("<tr></tr>").append($("<th></th>").append("操作流水号")).append($("<th></th>").append("操作类型")).append($("<th></th>").append("操作时间"))
        .append($("<th></th>").append("书本编号")).append($("<th></th>").append("书本名称")).append($("<th></th>").append("借阅者卡号"))
        .append($("<th></th>").append("借阅者姓名")).append($("<th></th>").append("操作人员姓名"))
        .appendTo("#mytable thead");
}
$("#searchOplog").click(function () {
    showOPLOG();
    showOplogPage(1);
});

function showOplogPage(n) {
    $.ajax({
        url: "/api/oplog",
        data: "pn=" + n,
        type: "GET",
        success: function (result) {
            console.info(result);
            //显示书本数据
            build_oplog_table(result);
            //显示分页信息
            build_page_info(result.data.oplog);
            //显示页面的导航信息
            build_page_nav(result.data.oplog, showOplogPage);
            settotalOplog(result.data.oplog.total,result.data.oplog.pageSize);//更新操作编号
        }
    });
}

function showBookPage(n) {
    $.ajax({
        url: "/api/book",
        data: "pn=" + n,
        type: "GET",
        success: function (result) {
            console.info(result);
            //显示书本数据
            build_book_table(result);
            //显示分页信息
            build_page_info(result.data.detail);
            //显示页面的导航信息
            build_page_nav(result.data.detail, showBookPage);
        }
    });
}


function showUserPage(n) {
    $.ajax({
        url: "/api/user",
        data: "pn=" + n,
        type: "GET",
        success: function (result) {
            console.info(result);
            //显示书本数据
            build_user_table(result);
            //显示分页信息
            build_page_info(result.data.user);
            //显示页面的导航信息
            build_page_nav(result.data.user, showUserPage);
        }
    });
}

function build_book_table(result) {
    $("#mytable tbody").empty();
    var books = result.data.detail.list;
    $.each(books, function (index, item) {
        var subnum = $("<td></td>").append(item.subnum);
        var classnum = $("<td></td>").append(item.catalog.classnum);
        var isbn = $("<td></td>").append(item.catalog.isbn);
        var bookName = $("<td></td>").append(item.catalog.bookName);
        var bookNames = $("<td></td>").append(item.catalog.bookNames);
        var bookAuthor = $("<td></td>").append(item.catalog.bookAuthor);
        var bookAuthors = $("<td></td>").append(item.catalog.bookAuthors);
        var bookVersion = $("<td></td>").append(item.catalog.bookVersion);
        var bookPress = $("<td></td>").append(item.catalog.bookPress);
        var bookPubdate = $("<td></td>").append(new Date(item.catalog.bookPubdate).toLocaleDateString());
        var bookPage = $("<td></td>").append(item.catalog.bookPage);
        var bookPrice = $("<td></td>").append(item.catalog.bookPrice);
        var bookRemainnum = $("<td></td>").append(item.catalog.bookRemainnum);
        var bookNum = $("<td></td>").append(item.catalog.bookNum);
        var catalogMan = $("<td></td>").append(item.catalog.catalogMan);
        var iscanceled = $("<td></td>").append(item.catalog.iscanceled);
        var bookCode = $("<td></td>").append(item.bookCode);
        var islended = $("<td></td>").append(item.islended);
        var outdate = $("<td></td>").append(new Date(item.outdate).toLocaleDateString());
        var indate = $("<td></td>").append(new Date(item.indate).toLocaleDateString());
        var userId = $("<td></td>").append(item.userId);
        var islost = $("<td></td>").append(item.islost);
        var lostdate = $("<td></td>").append(new Date(item.lostdate).toLocaleDateString());
        var editBtn = $("<button></button>").addClass(
            "btn btn-primary btn-sm edit-btn").append(
            $("<span></span>").addClass(
                "glyphicon glyphicon-pencil")).append("编辑");
        editBtn.attr("edit-stuId", item.id);
        var editBtnTd = $("<td></td>").append(editBtn);
        $("<tr></tr>").append(subnum).append(classnum).append(isbn)
            .append(bookName).append(bookNames).append(bookAuthor)
            .append(bookAuthors).append(bookVersion).append(bookPress)
            .append(bookPubdate).append(bookPage).append(bookPrice)
            .append(bookRemainnum).append(bookNum).append(catalogMan)
            .append(iscanceled).append(bookCode).append(islended)
            .append(outdate).append(indate).append(userId)
            .append(islost).append(lostdate).append(editBtnTd)
            .appendTo("#mytable tbody");
    })
}

function build_book_tables(result) {
    $("#mytable tbody").empty();
    var books = result.data.detail.list;
    $.each(books, function (index, item) {
        var subnum = $("<td></td>").append(item.subnum);
        var classnum = $("<td></td>").append(item.classnum);
        var isbn = $("<td></td>").append(item.isbn);
        var bookName = $("<td></td>").append(item.bookName);
        var bookNames = $("<td></td>").append(item.bookNames);
        var bookAuthor = $("<td></td>").append(item.bookAuthor);
        var bookAuthors = $("<td></td>").append(item.bookAuthors);
        var bookVersion = $("<td></td>").append(item.bookVersion);
        var bookPress = $("<td></td>").append(item.bookPress);
        var bookPubdate = $("<td></td>").append(new Date(item.bookPubdate).toLocaleDateString());
        var bookPage = $("<td></td>").append(item.bookPage);
        var bookPrice = $("<td></td>").append(item.bookPrice);
        var bookRemainnum = $("<td></td>").append(item.bookRemainnum);
        var bookNum = $("<td></td>").append(item.bookNum);
        $("<tr></tr>").append(subnum).append(classnum).append(isbn)
            .append(bookName).append(bookNames).append(bookAuthor)
            .append(bookAuthors).append(bookVersion).append(bookPress)
            .append(bookPubdate).append(bookPage).append(bookPrice)
            .append(bookRemainnum).append(bookNum)
            .appendTo("#mytable tbody");
    })
}

function build_borrowedBook_table(result) {
    $("#mytable tbody").empty();
    var books = result.data.borrowedBook.list;
    $.each(books, function (index, item) {
        var subnum = $("<td></td>").append(item.subnum);
        var classnum = $("<td></td>").append(item.classnum);
        var isbn = $("<td></td>").append(item.isbn);
        var bookName = $("<td></td>").append(item.bookName);
        var bookNames = $("<td></td>").append(item.bookNames);
        var bookAuthor = $("<td></td>").append(item.bookAuthor);
        var bookAuthors = $("<td></td>").append(item.bookAuthors);
        var bookVersion = $("<td></td>").append(item.bookVersion);
        var bookPress = $("<td></td>").append(item.bookPress);
        var bookPubdate = $("<td></td>").append(new Date(item.bookPubdate).toLocaleDateString());
        var bookPage = $("<td></td>").append(item.bookPage);
        var bookPrice = $("<td></td>").append(item.bookPrice);
        var bookRemainnum = $("<td></td>").append(item.bookRemainnum);
        var bookNum = $("<td></td>").append(item.bookNum);
        $("<tr></tr>").append(subnum).append(classnum).append(isbn)
            .append(bookName).append(bookNames).append(bookAuthor)
            .append(bookAuthors).append(bookVersion).append(bookPress)
            .append(bookPubdate).append(bookPage).append(bookPrice)
            .append(bookRemainnum).append(bookNum)
            .appendTo("#mytable tbody");
    })
}


function build_user_table(result) {
    $("#mytable tbody").empty();
    var users = result.data.user.list;
    $.each(users, function (index, item) {
        var userId = $("<td></td>").append(item.userId);
        var userCode = $("<td></td>").append(item.userCode);
        var userName = $("<td></td>").append(item.userName);
        var regdate = $("<td></td>").append(new Date(item.regdate).toLocaleDateString());
        var borrowed = $("<td></td>").append(item.borrowed);
        var iscanceled = $("<td></td>").append(item.iscanceled);
        var canceleddate = $("<td></td>").append(new Date(item.canceleddate).toLocaleDateString());
        var userAge = $("<td></td>").append(item.userAge);
        var userGender = $("<td></td>").append(item.userGender);
        var idnum = $("<td></td>").append(item.idnum);
        var userPhone = $("<td></td>").append(item.userPhone);
        var brrowlimit = $("<td></td>").append(item.brrowlimit);
        var iscompensated = $("<td></td>").append(item.iscompensated);
        var compensatedint = $("<td></td>").append(item.compensatedint);
        var colleageName = $("<td></td>").append(item.colleage.colleageName);
        var majorName = $("<td></td>").append(item.major.majorName);
        var editBtn = $("<button></button>").addClass(
            "btn btn-primary btn-sm edit-btn").append(
            $("<span></span>").addClass(
                "glyphicon glyphicon-pencil")).append("编辑");
        editBtn.attr("edit-stuId", item.id);
        var editBtnTd = $("<td></td>").append(editBtn);
        $("<tr></tr>").append(userId).append(userCode).append(userName)
            .append(regdate).append(borrowed).append(iscanceled)
            .append(canceleddate).append(userAge).append(userGender)
            .append(idnum).append(userPhone).append(brrowlimit)
            .append(iscompensated).append(compensatedint).append(colleageName)
            .append(majorName).append(editBtnTd).appendTo(
            "#mytable tbody");
    });
}


function build_user_tables(result) {
    $("#mytable tbody").empty();
    var users = result.data.user.list;
    $.each(users, function (index, item) {
        var userId = $("<td></td>").append(item.userId);
        var userCode = $("<td></td>").append(item.userCode);
        var userName = $("<td></td>").append(item.userName);
        var regdate = $("<td></td>").append(new Date(item.regdate).toLocaleDateString());
        var borrowed = $("<td></td>").append(item.borrowed);
        var iscanceled = $("<td></td>").append(item.iscanceled);
        var canceleddate = $("<td></td>").append(new Date(item.canceleddate).toLocaleDateString());
        var userAge = $("<td></td>").append(item.userAge);
        var userGender = $("<td></td>").append(item.userGender);
        var idnum = $("<td></td>").append(item.idnum);
        var userPhone = $("<td></td>").append(item.userPhone);
        var brrowlimit = $("<td></td>").append(item.brrowlimit);
        $("<tr></tr>").append(userId).append(userCode).append(userName)
            .append(regdate).append(borrowed).append(iscanceled)
            .append(canceleddate).append(userAge).append(userGender)
            .append(idnum).append(userPhone).append(brrowlimit)
            .appendTo("#mytable tbody");
    });
}


function build_oplog_table(result) {
    $("#mytable tbody").empty();
    var users = result.data.oplog.list;
    $.each(users, function (index, item) {
        var opId = $("<td></td>").append(item.opId);
        var opWay = $("<td></td>").append(item.opWay);
        var opTime = $("<td></td>").append(new Date(item.opTime).toLocaleDateString());
        var bookId = $("<td></td>").append(item.bookId);
        var bookName = $("<td></td>").append(item.catalog.bookName);
        var userId = $("<td></td>").append(item.userId);
        var userName = $("<td></td>").append(item.user.userName);
        var opUser = $("<td></td>").append(item.opUser);
        $("<tr></tr>").append(opId).append(opWay).append(opTime)
            .append(bookId).append(bookName).append(userId)
            .append(userName).append(opUser).appendTo(
            "#mytable tbody");
    });
}

function build_page_info(result) {
    $("#page_info_area").empty();
    $("#page_info_area").append(
        "当前第" + result.pageNum + "页/总共"
        + result.pageSize + "页，总记录为"
        + result.total + "条");
    totalPage = result.pageSize;
    currPage = result.pageNum;
}

function build_page_nav(result, func) {
    $("#page_nav_area").empty();
    var ul = $("<ul></ul>").addClass("pagination");
    var firstPageLi = $("<li></li>").append(
        $("<a></a>").append("首页").attr("href", "#"));
    var previousPageLi = $("<li></li>").append(
        $("<a></a>").append("&laquo;").attr("href", "#"));

    if (result.hasPreviousPage == false) {
        firstPageLi.addClass("disabled");
        previousPageLi.addClass("disabled");
    } else {
        firstPageLi.click(function () {
            func(1);
        });
        previousPageLi.click(function () {
            func(result.pageNum - 1);
        });
    }

    var nextPageLi = $("<li></li>").append(
        $("<a></a>").append("&raquo;").attr("href", "#"));
    var lastPageLi = $("<li></li>").append(
        $("<a></a>").append("末页").attr("href", "#"));

    if (result.hasNextPage == false) {
        nextPageLi.addClass("disabled");
        lastPageLi.addClass("disabled");
    } else {
        nextPageLi.click(function () {
            func(result.pageNum + 1);
        });
        lastPageLi.click(function () {
            func(result.pages);
        });
    }

    ul.append(firstPageLi.addClass("btn btn-sm btn-outline-secondary")).append(previousPageLi.addClass("btn btn-sm btn-outline-secondary"));

    $.each(result.navigatepageNums, function (index, item) {
        var numLi = $("<li></li>").append(
            $("<a></a>").append(item).attr("href", "#"));
        if (result.pageNum == item) {
            numLi.addClass("active");
        }
        numLi.click(function () {
            func(item);
        });
        ul.append(numLi.addClass("btn btn-sm btn-outline-secondary"));
    });
    ul.append(nextPageLi.addClass("btn btn-sm btn-outline-secondary")).append(lastPageLi.addClass("btn btn-sm btn-outline-secondary"));
    var navElement = $("<nav></nav>").append(ul).appendTo(
        "#page_nav_area");
}
//
// //重置添加模态框
// function reset_form(ele) {
//     //清除表单的数据
//     $(ele)[0].reset();
//     //清除校验状态
//     $(ele).find("*").removeClass("has-error has-success");
//     //清除提示信息
//     $(ele).find(".help-block").text("");
// }

//点击编辑按钮
// $(document).on("click", ".edit-btn", function () {
//     //1.显示专业名称
//     getMajors("#stuUpdateModal select");
//     //2.获取要编辑的学生信息
//     getStudent($(this).attr("edit-stuid"));
//     //将编辑按钮的edit-stuid值传递给修改按钮
//     $("#stu_update_btn").attr("edit-stuid", $(this).attr("edit-stuid"));
//     //3.显示模态框
//     $('#stuUpdateModal').modal({
//         backdrop: "static"
//     });
// });
//点击借阅图书
// $("#borrowBook").click(function () {
//     //0.还原表单的状态
//     reset_form("#borrowBookModal form");
//     //1.显示模态框
//     $("#borrowBookModal").modal({
//         backdrop: "static"
//     });
// });
//修改时获取学生信息
// function getStudent(id) {
//     $.ajax({
//         url: "${pageContext.request.contextPath }/stu/" + id,
//         type: "GET",
//         success: function (result) {
//             if (result.code == 101) {
//                 var student = result.data.student;
//                 $("#stuName_update_input").val(student.name);
//                 $("#email_update_input").val(student.email);
//                 $("#phone_update_input").val(student.phone);
//                 $("#birth_update_input").val(new Date(student.birth).toLocaleDateString());
//                 $("#regTime_update_input").val(new Date(student.regTime).toLocaleDateString());
//                 $("#stuUpdateModal input[name=gender]").val([student.gender]);
//                 $("#stuUpdateModal select").val([student.majorId]);
//             } else {
//
//             }
//         }
//     });
// }
function settotalOplog(x,y)
{
    totalOplog=x;
    totalPage=y;
}
$.ajax({
    url: "/api/oplog",
    data: "pn=" + 1,
    type: "GET",
    success: function (result) {
        settotalOplog(result.data.oplog.total,result.data.oplog.pageSize)
    }
});
$("#borrowBook").click(function () {
    $("#opId_add_input").attr("value",totalOplog+1);
    var mydate = new Date();
    $("#opTime_add_input").attr("value",
        mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate()+"T"+mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds());
});
$(document).on("click", "#returnBook", function () {
    $("#opId_add_input2").attr("value",totalOplog+1);
    var mydate = new Date();
    $("#opTime_add_input2").attr("value",
        mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate()+"T"+mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds());
});
//保存按钮的点击事件
$("#borrowBook_save_btn").click(function () {
    $.ajax({
        url: "/api/borrowBook",
        type: "POST",
        data: $("#borrowBookModal form").serialize(),
        success: function (result) {
            if (result.code == 101) {
                $("#borrowBookModal").modal('hide');
                alert("借书成功");
                showOPLOG();
                showOplogPage(totalPage);

            }
            if (result.code == 102) {
                alert("借书失败");
            }
        }
    });
});
//保存按钮的点击事件
$("#returnBook_save_btn").click(function () {
    $.ajax({
        url: "/api/returnBook",
        type: "POST",
        data: $("#returnBookModal form").serialize(),
        success: function (result) {
            if (result.code == 101) {
                $("#returnBookModal").modal('hide');
                alert("还书成功");
                showOPLOG();
                showOplogPage(totalPage);
            }
            if (result.code == 102) {
                alert("还书失败");
            }
        }
    });
});
$(document).on("click", "#addUser", function () {
    var mydate = new Date();
    $("#addUser_regdate_add_input").attr("value",
        mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate()+"T"+mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds());
    console.log("增加时间成功")
});
$("#addUser_save_btn").click(function () {
    $.ajax({
        url: "/api/addUser",
        type: "POST",
        data: $("#addUserModal form").serialize(),
        success: function (result) {
            if (result.code == 101) {
                $("#addUserModal").modal('hide');
                alert("新增用户成功");
                showUSER();
                showUserPage(1);
            }
            if (result.code == 102) {
                alert("新增用户失败");
            }
        }
    });
});
//添加书本按钮addBook_bookDate_add_input
$(document).on("click", "#addBook", function () {
    var mydate = new Date();
    $("#addBook_bookDate_add_input").attr("value",
        mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate()+"T"+mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds());
    console.log("增加时间成功")
});
$("#addBook_save_btn").click(function () {
    $.ajax({
        url: "/api/addBook",
        type: "POST",
        data: $("#addBookModal form").serialize(),
        success: function (result) {
            if (result.code == 101) {
                $("#addBookModal").modal('hide');
                alert("新增图书成功");
                showBOOK();
                showBookPage(1);
            }
            if (result.code == 102) {
                alert("新增图书失败");
            }
        }
    });
});
//搜索图书按钮
$(document).on("click","#searchBook_save_btn",function () {
    $.ajax({
        url: "/api/getBook",
        data: "pn=1&" + $("#searchBookModal form").serialize(),
        type: "GET",
        success: function (result) {
            console.info(result);
            $("#searchBookModal").modal('hide');
            showBOOKs();
            //显示书本数据
            build_book_tables(result);
            //显示分页信息
            build_page_info(result.data.detail);
            //显示页面的导航信息
            build_page_nav(result.data.detail, showBookPage);
        }
    });
});
//搜索学生按钮
$(document).on("click","#searchUser_save_btn",function () {
    $.ajax({
        url: "/api/getUser",
        data: "pn=1&" + $("#searchUserModal form").serialize(),
        type: "GET",
        success: function (result) {
            console.info(result);
            $("#searchUserModal").modal('hide');
            showUSERs();
            //显示学生数据
            build_user_tables(result);
            //显示分页信息
            build_page_info(result.data.user);
            //显示页面的导航信息
            build_page_nav(result.data.user, showBookPage);
        }
    });
});


//添加时的数据校验
function validate_add_form() {
    var stuName = $("#stuName_add_input").val();
    var regxName = /(^[a-zA-Z0-9_-]{6,16}$)|(^[\u2E80-\u9FFF]{2,8}$)/;
    if (!regxName.test(stuName)) {
        //alert("姓名只能是2~8位的汉字或6~16位的字符");
        show_validate_status("#stuName_add_input", "error", "姓名只能是2-8位汉字或者2-16位字符");
        return false;
    } else {
        show_validate_status("#stuName_add_input", "success", "");
    }

    var email = $("#email_add_input").val();
    var regxEmail = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
    if (!regxEmail.test(email)) {
        //alert("邮箱格式不正确");
        show_validate_status("#email_add_input", "error", "邮箱格式不正确！");
        return false;
    } else {
        show_validate_status("#email_add_input", "success", "");
    }

    return true;
}

//数据校验
function show_validate_status(ele, status, msg) {
    $(ele).parent().removeClass("has-error has-success");
    if (status == "success") {
        $(ele).parent().addClass("has-success");
        $(ele).next("span").text(msg);
    } else if (status == "error") {
        $(ele).parent().addClass("has-error");
        $(ele).next("span").text(msg);
    }
}

//检测姓名是否可用
$("#stuName_add_input").change(function () {
    var stuName = this.value;
    $.ajax({
        url: "${pageContext.request.contextPath }/checkName",
        type: "POST",
        data: "stuName=" + stuName,
        success: function (result) {
            if (result.code == 101) {
                show_validate_status("#stuName_add_input", "success", result.data.va_name);
                $("#stu_save_btn").attr("checkName", "success");
            } else {
                show_validate_status("#stuName_add_input", "error", result.data.va_name);
                $("#stu_save_btn").attr("checkName", "error");
            }
        }
    });
});

$("#stu_update_btn").click(function () {
    //1.校验表单数据
    if (!validate_update_form()) {
        return false;
    }
    //2.发送AJAX请求，更新学生数据
    $.ajax({
        url: "${pageContext.request.contextPath }/stu/" + $(this).attr("edit-stuid"),
        type: "POST",
        data: $("#stuUpdateModal form").serialize() + "&_method=PUT",
        success: function (result) {
            if (result.code == 101) {
                $("#stuUpdateModal").modal('hide');
                showPage(currPage);
            }
            else {
                if (result.data.errors.name != undefined) {
                    show_validate_status("#stuName_update_input", "error", "姓名只能是2-8位汉字或者2-16位字符");
                }
                if (result.data.errors.email != undefined) {
                    show_validate_status("#email_update_input", "error", "邮箱格式不正确！");
                }
                if (result.data.errors.phone != undefined) {
                    show_validate_status("#phone_update_input", "error", "电话号码不正确");
                }
                if (result.data.errors.birth != undefined) {
                    show_validate_status("#birth_update_input", "error", "出生日期格式不正确");
                }
                if (result.data.errors.regTime != undefined) {
                    show_validate_status("#regTime_update_input", "error", "注册日期格式不正确");
                }
            }
        }
    });
});

//修改时的数据校验
function validate_update_form() {
    var stuName = $("#stuName_update_input").val();
    var regxName = /(^[a-zA-Z0-9_-]{6,16}$)|(^[\u2E80-\u9FFF]{2,8}$)/;
    if (!regxName.test(stuName)) {
        //alert("姓名只能是2~8位的汉字或6~16位的字符");
        show_validate_status("#stuName_update_input", "error", "姓名只能是2-8位汉字或者2-16位字符");
        return false;
    } else {
        show_validate_status("#stuName_update_input", "success", "");
    }

    var email = $("#email_update_input").val();
    var regxEmail = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
    if (!regxEmail.test(email)) {
        //alert("邮箱格式不正确");
        show_validate_status("#email_update_input", "error", "邮箱格式不正确！");
        return false;
    } else {
        show_validate_status("#email_update_input", "success", "");
    }

    return true;
}
