<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>

<div class="container">
    <form:errors path="*" cssClass="errorblock" element="div" />


    <%--example error--%>
    <%--<form:errors path="firstName" cssClass="error" />--%>


    <form action="updateSchedule" method="post" name="updateScheduleForm">

        <input type="hidden" name="jsonChanges" value="initial text">
        <%--<form:hidden id="returnInput" path="jsonChanges" value="" />--%>

        <%--<table border="2" cellpadding="2">--%>
            <%--<tr>--%>
               <%--<th></th>--%>
               <%--<th>Day 1</th>--%>
               <%--<th>Day 2</th>--%>
               <%--<th>Day 3</th>--%>
               <%--<th>Day 4</th>--%>
               <%--<th>Day 5</th>--%>
               <%--<th>Day 6</th>--%>
               <%--<th>Day 7</th>--%>
            <%--</tr>--%>
            <%--<tr>--%>
                <%--<th>Employee</th>--%>
                <%--<th>${schedule.weekPrediction.day0Id}</th>--%>
                <%--<th>${schedule.weekPrediction.day1Id}</th>--%>
                <%--<th>${schedule.weekPrediction.day2Id}</th>--%>
                <%--<th>${schedule.weekPrediction.day3Id}</th>--%>
                <%--<th>${schedule.weekPrediction.day4Id}</th>--%>
                <%--<th>${schedule.weekPrediction.day5Id}</th>--%>
                <%--<th>${schedule.weekPrediction.day6Id}</th>--%>
            <%--</tr>--%>

            <%--<c:forEach items="${employees}" var="employee">--%>
                <%--<tr>--%>
                    <%--<td>--%>

                    <%--</td>--%>
                    <%--<c:forEach items="${schedule.shifts}" var="shift">--%>
                        <%--<c:if test="${shift.employee == employee.id}">--%>
                            <%--<br />--%>
                            <%--<form:input path=""--%>
                        <%--</c:if>--%>
                    <%--</c:forEach>--%>
                <%--</tr>--%>
            <%--</c:forEach>--%>

        <%--</table>--%>

        <%--<button class="btn btn-default" type="submit">Update</button>--%>

    </form>

    <script type="text/javascript">
        window.onload = function() {

            function example(vari) {
                debugger;
            }

            <%--example(${raw(schedule)});--%>
        };
    </script>


</div>

<jsp:include page="template/footer.jsp"/>
</body>
</html>
