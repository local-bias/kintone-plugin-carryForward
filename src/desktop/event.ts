const action: PluginAction = async (event, pluginId) => {
  console.log('プラグインが有効です', { pluginId, event });
  return event;
};

export default { action };
