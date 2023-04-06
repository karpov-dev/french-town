<template>
  <div class="header__contacts">
    <icon-text file="address" :text="service.address">
      <formatted-address :address="service.address" :geo-point="service.geoPoint"/>
    </icon-text>

    <icon-text file="clock" :text="service.workTime"/>

    <icon-text file="contact">
      <formatted-phone :phone="service.phone"/>
    </icon-text>

    <about-follow-us :medias="socialMedias"/>
  </div>
</template>

<script setup lang="ts">
  import IconText from "../../../icon/IconText.vue";
  import AboutFollowUs from "../../../about/AboutFollowUs.vue";
  import FormattedPhone from "../../../output/formattedPhone.vue";
  import FormattedAddress from "../../../output/formattedAddress.vue";
  import {DataManager} from "../../../../db/DataManager";
  import {IService, ISocialMedia} from "../../../../db/types";
  import {onMounted, ref} from "vue";

  const service = ref<IService>({} as IService);
  const socialMedias = ref<Array<ISocialMedia>>([]);

  onMounted(async () => {
    service.value = (await DataManager.getCollection(DataManager.COLLECTIONS.SERVICE))[0] as IService;
    socialMedias.value = (await DataManager.getCollection(DataManager.COLLECTIONS.SOCIAL_MEDIA)) as Array<ISocialMedia>;
  })
</script>

<style scoped lang="scss">
  .header__contacts {
    @include flex-row;
    @include space-between-center;
    @include height-inherit;
    font-weight: 500;
    border-bottom: 1px solid rgba(126, 126, 126, 0.76);
    padding: 10px;
    gap: 5px;
    font-size: var(--font-size__header-contacts);
  }

  a {
    color: inherit;
    font-weight: 500;
  }
</style>