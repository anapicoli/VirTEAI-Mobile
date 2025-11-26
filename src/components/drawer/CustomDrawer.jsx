import React, { useEffect, useMemo, useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, Content, DrawerContainer, Footer, Header, UserName } from "./styles";

export default function CustomDrawer(props) {
  const { user } = props; // optional prop with user info
  const [isLogged, setIsLogged] = useState(false);

  async function refreshAuth() {
    try {
      const token = await AsyncStorage.getItem("token");
      setIsLogged(!!token);
    } catch (e) {
      setIsLogged(false);
    }
  }

  useEffect(() => {
    refreshAuth().then(() => {} );
  }, [props.state]);

  const filteredState = useMemo(() => {
    const originalRoutes = props.state?.routes || [];
    let routes;
    if (!isLogged) {
      routes = originalRoutes.filter((r) => !/perfil/i.test(r.name));
    } else {
      routes = originalRoutes.filter((r) => !/(^|\b)(login|cadastro)/i.test(r.name));
    }
    const index = Math.min(props.state?.index || 0, Math.max(routes.length - 1, 0));
    return { ...props.state, routes, index };
  }, [props.state, isLogged, props.state?.index]);

  const getLabel = (routeName) => {
    if (!routeName) return "";
    const parts = String(routeName).split("/");
    let base = parts[parts.length - 1];
    if (base === "index" && parts.length > 1) {
      base = parts[parts.length - 2];
    }
    if (!base || base === "index") base = "home";
    base = base.replace(/\(([^)]*)\)/g, "");
    base = base.replace(/-/g, " ").trim();

    const map = {
      home: "Home",
      ofertas: "Ofertas",
      perfil: "Perfil",
      login: "Login",
      "cadastro paciente": "Cadastro Paciente",
      "cadastro terapeuta": "Cadastro Terapeuta",
      notificacoes: "Notificações",
      "sobre nos": "Sobre nós",
      perguntas: "Perguntas",
      "redes mobile": "Redes",
      "acesso conta": "Acesso à conta",
    };
    const key = base.toLowerCase();
    if (map[key]) return map[key];
    // Title Case padrão
    return base
      .split(" ")
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } finally {
      props.navigation?.closeDrawer?.();
      try {
        props.navigation?.navigate?.("login");
      } catch {}
      setIsLogged(false);
    }
  };
  return (
    <DrawerContainer>
      {isLogged && (
        <Header>
          <Avatar source={user?.avatar || require("../../assets/images/perfilicon.png")} />
          <UserName>{user?.name || "Usuário"}</UserName>
        </Header>
      )}
      <Content>
        <DrawerContentScrollView {...props}>
          {filteredState?.routes?.map((route, idx) => (
            <DrawerItem
              key={route.key || route.name || idx}
              label={getLabel(route.name)}
              focused={filteredState.index === idx}
              onPress={() => props.navigation?.navigate?.(route.name)}
              icon={() => null}
              labelStyle={{ color: "#22304A", fontFamily: "MarmeladRegular" }}
            />
          ))}
        </DrawerContentScrollView>
      </Content>
      {isLogged && (
        <Footer>
          <DrawerItem
            label="Sair"
            labelStyle={{ color: "#22304A", fontFamily: "MarmeladRegular" }}
            onPress={props.onLogout || handleLogout}
            icon={() => null}
          />
        </Footer>
      )}
    </DrawerContainer>
  );
}
