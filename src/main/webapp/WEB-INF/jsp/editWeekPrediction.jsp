<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <script src="<c:url value="/assets/js/jquery-3.1.1.min.js" />"></script>
    <script src="<c:url value="/assets/js/weekPredictionJS/weekPredictionMain.js" />"></script>
    <link href="<c:url value="/assets/css/bootstrap.min.css"/>" rel="stylesheet">
    <link href="<c:url value="/assets/css/myGlobalStyles.css"/>" rel="stylesheet">
</head>

<body>
<jsp:include page="template/header.jsp"/>

<div class="container">
    <form:errors path="*" cssClass="errorblock" element="div" />



    <form:form action="/scheduleMaker/updateWeekPrediction" method="POST" modelAttribute="weekPrediction">

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
                            <form:select id="select${loop.index}" path="day${loop.index}Id">
                                <form:options items="${allDayPredictions}" itemValue="id" itemLabel="title" />
                            </form:select>
                        </div>
                    </td>
                </c:forEach>
            </tr>
        </table>

        <td><input class="btn btn-default" type="submit" value="Update" /></td>
    </form:form>

    <tr>
        <td><a href="delete/${weekPrediction.id}"><button class="btn btn-danger">Delete Week Prediction</button></a></td>
    </tr>



    <input type="hidden" id="jsonBom" value="${currentDaysAsJSONString}"/>

    <script type="text/javascript">

        $(document).ready(function() {

            attachValuesToSelect($("#jsonBom").val());

        });

    </script>

</div>

<jsp:include page="template/footer.jsp"/>
</body>
</html>
