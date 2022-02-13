import { Button, CardBody, CardTitle } from "reactstrap";

function TeamMember({ name, title, role }) {
  return (
    <div className="team-card-profile">
      <div className="circle-team-card-profile">
        <div className="team-imgBx">
          <img alt="..." src={require(`assets/img/team/${name}.jpg`).default} />
        </div>
      </div>
      <div className="content-team-card-profile">
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
          <h6 className="category text-info">{role}</h6>
          <Button
            className="btn-icon btn-round"
            color="info"
            href="#pablo"
            type="button"
          >
            <i className="fab fa-linkedin" />
          </Button>
          <Button
            className="btn-icon btn-round"
            color="info"
            href="#pablo"
            type="button"
          >
            <i className="fab fa-google" />
          </Button>
        </CardBody>
      </div>
    </div>
  );
}

export default TeamMember;
