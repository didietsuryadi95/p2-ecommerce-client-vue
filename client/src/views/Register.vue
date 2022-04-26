<template>
<v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    
    <v-text-field
      v-model="username"
      :rules="usernameRules"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="phoneNumber"
      :rules="phoneNumberRules"
      label="Phone Number"
      required
    ></v-text-field>

    <v-text-field
      v-model="address"
      label="Address"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>


    <v-text-field
      v-model="password"
      :rules="passwordRules"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="onSubmit(email, password)"
    >
      Signup
    </v-btn>
  </v-form>
</v-container>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";
export default {
  name: "RwvRegister",
  data() {
    return {
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be 8 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      username: '',
      usernameRules: [

      ],
      phoneNumber: '',
      phoneNumberRules: [

      ],
      address: ''
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password,
          Username: this.username,
          phoneNumber: this.phoneNumber,
          address: this.address
        })
        .then(() => this.$router.push({ name: "login" }));
    }
  }
};
</script>