<template>
  <card-post-block title="Как с нами связаться" page="Контакты">
    <card>
      <div class="about-contacts__contacts-grid">
        <about-contacts-item title="Телефон">
          <formatted-phone :phone="service.phone"/>
        </about-contacts-item>

        <about-contacts-item title="Email">
          <formatted-email :email="service.email"/>
        </about-contacts-item>

        <about-contacts-item title="Адрес">
          <formatted-address :address="service.address" :organization-id="service.yandexOrganizationId"/>
        </about-contacts-item>

        <about-contacts-item title="Часы работы">
          {{service.workTime}}
        </about-contacts-item>

        <about-contacts-item title="Социальные сети">
          <about-follow-us style="height: 35px" :medias="socialMedias"/>
        </about-contacts-item>

        <about-contacts-item title="Оцените нас">
          <iframe src="https://yandex.ru/sprav/widget/rating-badge/95025492147?type=rating" width="150" height="50" frameborder="0"></iframe>
          <iframe class="zoon" height="80" width="250" frameborder="0" :src="`https://zoon.ru/wg/comments/?frame_id=${new Date().getTime()}&id=64723486a0e5955c110c6ffe&locale=ru_RU&type=240x80&stars=all&style=white&scale=0.3`"></iframe>
        </about-contacts-item>
      </div>
    </card>
  </card-post-block>
</template>

<script setup lang="ts">
  import CardPostBlock from "../card/CardPostBlock.vue";
  import Card from "../card/Card.vue";
  import AboutContactsItem from "./AboutContactsItem.vue";
  import {onMounted, ref} from "vue";
  import {IService, ISocialMedia} from "../../db/types";
  import {DataManager} from "../../db/DataManager";
  import AboutFollowUs from "./AboutFollowUs.vue";
  import FormattedPhone from "../ui/output/formattedPhone.vue";
  import FormattedEmail from "../ui/output/formattedEmail.vue";
  import FormattedAddress from "../ui/output/formattedAddress.vue";

  const service = ref<IService>({} as IService);
  const socialMedias = ref<Array<ISocialMedia>>([]);

  onMounted(async () => {
    service.value = await DataManager.getService();
    socialMedias.value = await DataManager.getSocialMedias();
  })
</script>

<style scoped lang="scss">
  .ui-card {
    background-color: white;
    padding: 20px;
  }

  .about-contacts__contacts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    border-radius: 10px;
    border: 0;
    font-size: 15px;
  }

  .about_contacts__yandex-map {
    width: 100%;
    height: 500px;
  }

  @media only screen and (max-width: 600px) {
    .about-contacts__contacts-grid {
      grid-template-columns: 1fr;
    }
  }

  .zoon {
    -webkit-transform: scale(0.632);
    -webkit-transform-origin: 0 0;
  }
</style>