export const customDestroy = flower => {
	flower.active = false;
	flower.visible = false;
	flower.stem.active = false;
	flower.stem.visible = false;
};
