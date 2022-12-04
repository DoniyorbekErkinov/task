<template>
  <div class="form_container">
    <div class="form_wrapper">
      <h2 class="form_header">Form User</h2>
      <form>
        <div class="form_child">
          <label>Name</label>
          <input required type="text" placeholder="Name"/>
        </div>
        <div class="form_child">
          <label>Phone</label>
          <input required type="tel" placeholder="Phone"/>
        </div>
        <div class="form_child">
          <label>Passport</label>
          <input maxlength="7" minlength="7" required type="text" placeholder="Passport"/>
        </div>
        <div class="form_child">
          <label>PINFL</label>
          <input maxlength="14" minlength="14" pattern="[1-9]{14}" max="99999999999999" required type="number" placeholder="PINFL"/>
        </div>
        <div class="form_child">
          <label>Birth Date</label>
          <input required type="date" placeholder="Birth Date"/>
        </div>
        <div class="button">
          <button>Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.form_container {
  width: 100%;
  padding:40px;
}
.form_wrapper {
  width: 80%;
  min-width: 500px;
  height: auto;
  border: 1px solid #f3f0f0;
  margin: 0 auto;
  box-shadow: 1px 0px 10px #dad6d6;
  border-radius: 35px 10px 35px 10px;
  padding: 15px;
}
.form_header {
  text-align: center;
  font-size: 26px;
  font-weight: 500;
  margin-top: 15px;
}
form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.form_child {
  width: 50%;
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
}
.form_child > input {
  width: 90%;
  height: 40px;
  padding: 15px;
  margin-top: 15px;
  border: 1px solid #f3f1f1;
  box-shadow: 1px 0px 10px #dad6d6;
  border-radius: 35px 10px 35px 10px;
}
.form_child > input:nth-last-child() {
  width: 100%;
}
.form_child > input:valid {
  border: 1px solid #f3f1f1;
  box-shadow: 1px 0px 10px #dad6d6;
  border-radius: 35px 10px 35px 10px;
}
.form_child > input:invalid {
  border: 1px solid #c04040;
  box-shadow: 1px 0px 10px #dad6d6;
  border-radius: 10px 35px 10px 35px;
}
.form_child > input:focus {
  border: 1px solid #f3f1f1;
  box-shadow: 1px 0px 10px #dad6d6;
  border-radius: 35px 10px 35px 10px;
}
.form_child > label {
  margin: 15px 0px 0px 15px;
  font-size: 18px;
  font-weight: 400;
}
.button {
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 10px 60px;
}
button {
  width: 160px;
  height: 40px;
  border: 1px solid #f3f1f1;
  box-shadow: 1px 0px 10px #dad6d6;
  border-radius: 35px 10px 35px 10px;
  margin-top: 15px;
}
@media screen  and (max-width: 1200px){
  form {
    flex-direction: column;
    align-items: center;
  }
  .form_child {
    width: 100%;
    flex: 1 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto

  }
  .form_child > input{
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .form_child > label{
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 45px;
    font-size: 18px;
  }
  .button {
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 10px 30px;
  }
}
</style>
