<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Add Week Prediction</title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">
</head>
<body>
<jsp:include page="template/header.jsp"/>

<div class="container">

    <form:errors path="*" cssClass="errorblock" element="div" />


    <form:form commandName="weekPrediction">
        <form:hidden path="belongsTo" />
        <form:hidden path="id" />
        <table class="table">
            <tr>
                <th>Title</th>
                <th>Day 1</th>
                <th>Day 2</th>
                <th>Day 3</th>
                <th>Day 4</th>
                <th>Day 5</th>
                <th>Day 6</th>
                <th>Day 7</th>
            </tr>
            <tr>
                <td>
                    <form:input path="title" required="required"></form:input> <br>
                </td>
                <c:forEach begin="0" end="6" varStatus="loop">
                    <td>
                        <div class="form-group">
                            <form:select class="form-control" id="select${loop.index}" path="day${loop.index}.id">
                                <form:options items="${allDayPredictions}" itemValue="id" itemLabel="title" />
                            </form:select>
                        </div>
                    </td>
                </c:forEach>
            </tr>
        </table>

        <td><input class="btn btn-default" type="submit" value="Add Week Prediction" /></td>
    </form:form>



</div>

<jsp:include page="template/footer.jsp"/>
</body>
</html>
