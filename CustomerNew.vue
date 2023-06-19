<template>
  <div class="new-customer-page">
    <div class="header mt-6 ml-6">顧客新規作成</div>
    <div class="text-field flex mt-4 ml-6 flex-column align-items-start">
      <span class="title flex"> 顧客ID </span>
      <InputText class="lineID-field flex border-round-md border-200" placeholder="" v-model="lineID" />
      <small class="p-error text-sm" v-if="validatePresent(lineID)">*このフィールドは必須です
      </small>
    </div>
    <div class="flex">
      <div class="text-field flex mt-4 ml-6 flex-column align-items-start">
        <span class="title flex"> 名前（姓）</span>
        <InputText class="name-field flex border-round-md border-200" placeholder="名前（姓）" v-model="sureName" />
        <small class="p-error text-sm" v-if="validatePresent(sureName)">*このフィールドは必須です。
        </small>
      </div>

      <div class="text-field flex mt-4 ml-6 flex-column align-items-start">
        <span class="title flex"> 名前（名）</span>
        <InputText class="name-field flex border-round-md border-200" placeholder="名前（名" v-model="firstName" />
        <small class="p-error text-sm" v-if="validatePresent(firstName)">*このフィールドは必須です
        </small>
      </div>
    </div>
    <div class="text-field flex mt-4 ml-6 flex-column align-items-start">
      <span class="title flex"> 生年月日 </span>
      <div class="flex birth-field">
        <InputText class="input-field year-input p-float-label flex border-round-md border-200" v-model="year" />年
        <InputText class="input-field month-input flex border-round-md border-200" v-model="month" />月
        <InputText class="input-field day-input p-float-label flex border-round-md border-200" v-model="day" />日
      </div>
    </div>
    <div class="text-field flex mt-4 ml-6 flex-column align-items-start">
      <span class="title flex"> 生年月日 </span>
      <div class="flex-row align-items-center full-width">
        <label class="choices flex">
          <input class="choice-option" type="radio" v-model="gender" :value="false" :required="true" />
          男性
        </label>
        <label class="choices flex">
          <input class="choice-option" type="radio" v-model="gender" :value="true" :required="true" />
          女性
        </label>
        <label class="choices flex">
          <input class="choice-option" type="radio" v-model="gender" :value="2" :required="true" />
          未選択
        </label>
      </div>
    </div>

    <div class="text-field flex mt-4 ml-6 flex-column align-items-start">
      <span class="title flex"> メールアドレス </span>
      <InputText class="email-field p-float-label flex border-round-md border-200" placeholder="名前（姓)" v-model="Email" />
      <small class="p-error text-sm" v-if="validateUEmailnique(Email)"
        >*このフィールドは必須です
      </small>
    </div>
    <form @submit.prevent="getAddress" class="h-adr flex flex-column">
      <span class="p-country-name" style="display: none">Japan</span>
      <div class="flex post-field-height">
        <div class="text-field flex mt-4 ml-6 flex-column align-items-start">
          <span class="title flex"> 郵便番号 </span>
          <InputText class="postal-code-field p-postal-code p-float-label flex border-round-md border-200"
            placeholder="郵便番号" v-model="zipcode" />
        </div>
        <div>
          <button class="btn-find-address mt-6 border-transparent mb-8" v-on:click="getAddress">
            郵便番号で検索
          </button>
        </div>
      </div>
      <div class="address text-field flex mt-4 ml-6 flex-column align-items-start">
        <span class="title flex"> 住所 </span>
        <InputText
          class="p-float-label p-region p-locality p-street-address p-extended-address flex border-round-md border-200"
          placeholder="住所" v-model="region" />
      </div>
    </form>
    <div>
      <button class="btn-new mt-6 border-transparent mb-8" @click="createCustomer">
        保存する
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import axios from "axios";
import RouterUtils from "@/common/utils/router.util";
import ApiRouterConstants from "../constants/api.router.constants";
import RouterConstants from "../constants/router.constants";
import Customer from "@/common/store/customer";

const gender = ref(false);

if (gender.value !== false) {
  gender.value = true;
}
const errorT = ref(true)
const lineID = ref("");
const sureName = ref("");
const firstName = ref("");
const Email = ref("");
const address = ref();
const day = ref("");
const month = ref("");
const year = ref("");
const zipcode = ref("");

const validateErrors = ref(false);
const customerData = ref([]);

const validateUnique = ref(false);
const name = computed(() => {
  return firstName.value + " " + sureName.value;
});

const region = computed(() => {
  return address.value?.map(
    (address) => address.prefecture_name + address.city_name + address.address
  )
    .join(", ");
});

const Birth = computed(() => {
  return `${year.value}-${month.value}-${day.value}`;
});


const getCustomer = () => {
  console.log('is loadding');
  axios
    .get('http://localhost:3000/api/v1/customers/') // <============ fix

    .then((response) => {
      customerData.value = response.data;
      console.log('loaded');
    })
};
getCustomer()


const createCustomer = () => {
  if (validates()) {

  } else {

   
    var formData = new FormData();
    formData.append("line_user_id", lineID.value);
    formData.append("name", name.value);
    formData.append("birthday", Birth.value);
    formData.append("email", Email.value);
    formData.append("regional", zipcode.value);
    formData.append("address", region.value);
    formData.append("gender", gender.value.toString());
    axios
      .post(ApiRouterConstants.API_CUSTOMERS, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        RouterUtils.goTo(RouterConstants.CUSTOMER_ROUTER_NAME);
      });
  }
};

const getAddress = () => {
  axios
    .get(ApiRouterConstants.API_ZIPCODES + "/" + `${zipcode.value}`)
    .then((response) => {
      const data = response.data;
      const addresses = data.map((item) => ({
        id: item.id,
        prefecture_name: item.prefecture_name,
        city_name: item.city_name,
        address: item.address,
      }));
      address.value = addresses;
      console.log(address.value);
    });
  return {
    zipcode,
    address,
  };
};



const validatePresent = (value) => {
  return validateErrors.value && (value == "" || value == null);
};

const validateUEmailnique = (value) => {
  return validateErrors.value && customerData.value.some(customer => customer.email === Email.value);
}

const validates = () => {
  validateErrors.value = false;

  if (sureName.value == "") {
    validateErrors.value = true;
  }
  if (firstName.value == "") {
    validateErrors.value = true;
  }
  // const validateUEmailnique = customerData.value.some(customer => customer.email === Email.value);

  // if (validateUEmailnique) {
  //   validateErrors.value = true;
  // }
  return validateErrors.value
};
</script>

<style lang="scss" scoped>
.header {
  width: 1217px;
  height: 35px;
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400 !important;
  font-size: 24px;
  line-height: 35px;
  color: #4E4E4E;
}

.btn-new {
  margin-left: 20%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #897658;
  width: 626px;
  height: 48px;
  cursor: pointer;
  position: relative;
  bottom: 100%;
}

.btn-find-address {
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #897658;
  width: 129px;
  height: 48px;
  cursor: pointer;
  top: 8px;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 20%;
}

.p-region {
  width: 509px;
  height: 48px;
}

.text-field {
  .title {
    font-size: 14px;
    line-height: 21px;
    color: #373737;
    margin-bottom: 11px;
  }

  .lineID-field {
    width: 211px;
  }
}

.address {
  width: 40%;
}

.email-field {
  width: 509px;
  height: 48px;
}

.postal-code-field {
  width: 211px;
  height: 48px;
}

.birth-field {
  align-items: center;
}

.flex-row {
  flex-direction: row;
  display: flex;
}

.flex.name-field {
  width: 211px;
}

.gender-input {
  margin-bottom: 1rem;
}

.choice-option {
  width: 20px;
  height: 20px;
}

.full-width {
  width: 100%;
}

.choices {
  margin-right: 5%;
}

.address-field {
  width: 40%;
}

.input-field {
  width: 129px;
  margin-right: 11px;
}

.month-input,
.day-input {
  margin-left: 11px;
}

.post-field-height {
  height: 105px;
}

input[type="radio"] {
  accent-color: #897658;
}
</style>
