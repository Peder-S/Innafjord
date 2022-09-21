window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
/*knapper*/
function chagnepowerprice() {
    fetch("https://innafjord.azurewebsites.net/api/powerprice")
    .then(r => r.text())
    .then(r =>
        document.getElementById("button1").innerText = r
    )
}
function changewaterinflux() {
    fetch("https://innafjord.azurewebsites.net/api/waterinflux")
        .then(s => s.text())
        .then(s =>
            document.getElementById("button2").innerText = s
        )
}
function changepowerpriceall() {
    fetch("https://innafjord.azurewebsites.net/api/powerprice/all")
        .then(f => f.text())
        .then(f =>
            document.getElementById("button3").innerText = f
        )
}
/*-------------------------------------------------------------------------------------*/

     fetch("https://innafjord.azurewebsites.net/api/powerprice")
    .then(request => request.text())
    .then(request =>
            document.getElementById("tablepowerprice").innerHTML = request
    )

    fetch("https://innafjord.azurewebsites.net/api/waterinflux")
    .then(request => request.text())
    .then(request =>
            document.getElementById("tablewaterinflux").innerHTML = request
    )
    fetch("https://innafjord.azurewebsites.net/api/GroupState")
    .then(request => request.text())
    .then(request =>
            document.getElementById("waterlevel").innerHTML = request
    )
    fetch("https://innafjord.azurewebsites.net/api/waterinflux")
    .then(request => request.text())
    .then(request =>
            document.getElementById("envcost").innerHTML = request
    )

    const API_URL = "https://innafjord.azurewebsites.net/api/GroupState";
    const getHeaders = () => ({
        GroupId: document.getElementById("GroupId").value,
        GroupKey: document.getElementById("GroupKey").value,
    });

    const getGroupState = () =>
        fetch(`${API_URL}/GroupState`, {headers: getHeaders()}).then((r) =>
            r.json()
        );
    
    const moneyEarnedElement = document.getElementById("moneyEarned");
