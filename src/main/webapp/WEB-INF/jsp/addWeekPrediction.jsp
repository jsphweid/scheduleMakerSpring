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
        <table>
            <tr>
                <td>Title : <form:input path="title" /></td>
                <form:errors path="title" cssClass="error" />
                <c:forEach begin="0" end="6" varStatus="loop">
                    <td>
                        <div class="form-group">
                            <label for="selectLabel">Pick Day Prediction</label>
                            <form:select id="select${loop.index}" path="day${loop.index}.id">
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
