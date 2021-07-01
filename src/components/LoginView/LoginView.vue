<template>
  <div class='backgroundView'>
    <div class='login_view' >
        <v-row>
            <v-col id="login-carousel">
                <CarouselLarge />
            </v-col >
            <v-col>
                <v-row id='buttonfacebook'>
                <v-btn 
                  height="48px"
                  width="400px">

                  <v-img id='festimg'
                    max-width="24px"
                    max-height="24px"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NS43MyA0NTUuNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NS43MyA0NTUuNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQTU1OUY7IiBkPSJNMCwwdjQ1NS43M2gyNDIuNzA0VjI3OS42OTFoLTU5LjMzdi03MS44NjRoNTkuMzN2LTYwLjM1M2MwLTQzLjg5MywzNS41ODItNzkuNDc1LDc5LjQ3NS03OS40NzUNCgloNjIuMDI1djY0LjYyMmgtNDQuMzgyYy0xMy45NDcsMC0yNS4yNTQsMTEuMzA3LTI1LjI1NCwyNS4yNTR2NDkuOTUzaDY4LjUyMWwtOS40Nyw3MS44NjRoLTU5LjA1MVY0NTUuNzNINDU1LjczVjBIMHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" 
                  />

                  Login with Facebook
                </v-btn>
                </v-row>
                <v-row id='buttongoogle'>
                <v-btn
                  height="48px"
                  width="400px">
                  <v-img id='festimg'
                    max-width="24px"
                    max-height="24px"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" 
                  />
                  Login with Google</v-btn>
                </v-row >
                <v-row 
                >
                  <v-col class='festor'>
                    <div id='festfalsedivider'></div>
                  </v-col>
                  <v-col class='festor2'
                  style="padding-left:20px">
                    <label id='festlabel'>or</label>
                  </v-col >
                  <v-col class='festor'> 
                    <div id='festfalsedivider'></div>
                  </v-col>
                </v-row>
                <v-row class='festtext'
                >
                  <v-text-field 
                    label="Email"
                    placeholder="example@gmail.com"
                    background-color="var(--v-primary50)"
                    color="var(--v-primary300)"
                  ></v-text-field>
                </v-row>
                <v-row class='festtext'>                  
                  <v-text-field 
                    label="Password"
                    placeholder="************"
                    background-color="var(--v-primary50)"
                    color="var(--v-primary300)"
                  ></v-text-field>
                </v-row>
                <v-row >   
                  <v-btn id='festloginbtn'
                  >
                    Login
                  </v-btn>
                </v-row>
            </v-col>
        </v-row>  
    </div>
  </div>
</template>

<script>
  import "./LoginView.sass"
  import CarouselLarge from '../Carousel/CarouselLarge.vue';
  export default {
    name: 'LoginView',

    components: {
    CarouselLarge,
    },
    data:function () {
        return {

        }
    },
  }
</script>
