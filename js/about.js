window.addEventListener("DOMContentLoaded", main);

function main() {
  const valuesArr = [
    {
      title: "Authenticity",
      description: "We are blerds and nerds", icon:"fa-atom"},
    {  title: "Connection",
      description:
        "We will leverage our community's collective genius to build and empower others", icon:"fa-comments"
    },
    {title:"Growth", description:"We value learning, knowledge and learning for life", icon:"fa-user-graduate"},
    {title:"Impact", description:"We chart our impact to improve and advance our work", icon:"fa-chart-bar"},
    {title:"Equity", description:"We see the beauty in our differences and recognize the power in supporting the community in any way it needs.", icon:"fa-medal"},
    {title:"Innovation", description:"We believe in the power of change and adaptability", icon:"fa-lightbulb"},
    {title:"Joy", description:"We create safe spaces that empower, engage and inspire others", icon:"fa-star"}
  ];
  const values = document.querySelector("#values");

  let html = "";
  for (let value of valuesArr) {
    html += `<div class="col-md-3" style="text-align:center">
    <div >
        <span class="fa-stack fa-2x my-2">
            <i class="fas fa-circle fa-stack-2x text-blue gradient"></i>
            <i class="fas ${value.icon} fa-stack-1x fa-inverse"></i>
        </span>
        <h5>${value.title}</h4>
            <p>${value.description}</p>
    </div>
</div>`;
  }
  values.innerHTML = html;
}
