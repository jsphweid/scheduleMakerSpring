<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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

    <h2>Week Predictions </h2>

    <a style="margin-bottom: 20px;" class="btn btn-default" href="addWeekPrediction.html">Add New Week Prediction</a>

    <table class="table table-striped">
        <tr>
            <th>Title</th>
            <th>Day 1</th>
            <th>Day 2</th>
            <th>Day 3</th>
            <th>Day 4</th>
            <th>Day 5</th>
            <th>Day 6</th>
            <th>Day 7</th>
            <th></th>
        </tr>
        <c:forEach items="${allWeekPredictions}" var="weekPrediction">
            <tr>
                <td>${weekPrediction.title}</td>
                <td>${idToTextMap[weekPrediction.day0.id]}</td>
                <td>${idToTextMap[weekPrediction.day1.id]}</td>
                <td>${idToTextMap[weekPrediction.day2.id]}</td>
                <td>${idToTextMap[weekPrediction.day3.id]}</td>
                <td>${idToTextMap[weekPrediction.day4.id]}</td>
                <td>${idToTextMap[weekPrediction.day5.id]}</td>
                <td>${idToTextMap[weekPrediction.day6.id]}</td>
                <td><a class="btn btn-default" href="editWeekPrediction/${weekPrediction.id}">Edit</a></td>
            </tr>
        </c:forEach>
    </table>



    <%--<script type="text/javascript">--%>

        <%--$(document).ready(function() {--%>



        <%--})--%>

    <%--</script>--%>


</div>

<jsp:include page="template/footer.jsp"/>
</body>
</html>