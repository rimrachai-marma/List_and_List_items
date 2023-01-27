import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  background-color: #eee;
`;

const PersonDetails = ({ person }) => {
  return (
    <Container>
      <h3>{person.name}</h3>
      <p>Age: {person.age} years</p>
      <h3>Hobbies:</h3>
      <ul>
        {person.hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
    </Container>
  );
};

export default PersonDetails;
