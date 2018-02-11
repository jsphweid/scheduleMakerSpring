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

    <form action="updateEmployeesPositions" method="post" name="updateEmployeesPositionsForm">
        <input type="hidden" name="jsonChanges" value="initial text">
        <%--<form:hidden id="returnInput" path="jsonChanges" value="" />--%>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <table class="table table-striped">
                        <tr>
                            <th>Name</th>
                            <c:forEach items="${positions}" var="position">
                                <th>${position.title}</th>
                            </c:forEach>
                        </tr>
                        <c:forEach items="${employees}" var="employee">
                            <tr>
                                <td>${employee.firstName} ${employee.lastName}</td>
                                <c:forEach items="${positions}" var="position">
                                    <td>
                                        <c:if test="${employee.positions.contains(position)}">
                                            <input type="checkbox" id="${employee.id}-${position.id}" checked />
                                        </c:if>
                                        <c:if test="${!employee.positions.contains(position)}">
                                            <input type="checkbox" id="${employee.id}-${position.id}" />
                                        </c:if>
                                    </td>
                                </c:forEach>
                            </tr>
                        </c:forEach>

                    </table>
                </div>
                <div class="col-md-6">

                </div>
            </div>
        </div>

        <button class="btn btn-default" type="submit">Update</button>
        <a href="/scheduleMaker/manageEmployeesPositions" class="btn btn-default">Cancel</a>

    </form>



</div>


<script type="text/javascript">

    $(document).ready(function() {

        $(function() {
            $("[name='updateEmployeesPositionsForm']").submit(function() {
                var returnString = "";
                var inputs = $('input[type = checkbox]');
                inputs.each(function() {
                    if(this.checked) returnString += this.id + ",";
                });
                $("input[name = 'jsonChanges']").val(returnString.slice(0, -1));
            });
        });

    });

</script>


<jsp:include page="template/footer.jsp"/>
</body>
</html>
