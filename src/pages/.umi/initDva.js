import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/models/user.js').default) });
