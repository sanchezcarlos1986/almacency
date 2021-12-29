import React from 'react';
import {Home as Component} from './index.styles';
import Head from 'next/head';
import Image from 'next/image';
import {GetStaticProps} from 'next';
import {Product} from '../product/types';
import api from '../product/api';
import {
  Grid,
  Stack,
  Text,
  Button,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
} from '@chakra-ui/react';
import {currencyFormatter} from '../utils/currencyFormatter';

interface Props {
  products: Product[];
}

const IndexRoute: React.FC<Props> = ({products}) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);

  const text = React.useMemo(() => {
    return cart
      ? cart.reduce((message, product) => {
          const productsList = message?.concat(
            `* ${product.title} - ${product.price}\n`,
          );

          const total = cart.reduce(
            (total, product) => total + product.price,
            0,
          );

          const result = `${productsList}\n - Total: ${currencyFormatter({
            price: total,
            currency: 'CLP',
            locale: 'es-ES',
          })}`;

          return result;
        }, '')
      : '';
  }, [cart]);

  const handleAddToCart = (product: Product): void => {
    setCart(cart => cart.concat(product));
  };

  return (
    <Component.Container>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Soy IndexRoute</h1>

      <Stack>
        <Grid
          gridGap={6}
          templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
        >
          {Array.isArray(products) && products?.length
            ? products.map(product => (
                <Stack key={product.id} backgroundColor="gray.100">
                  <Image
                    alt={product.title}
                    src={product.image}
                    layout="responsive"
                    width={326}
                    height={245}
                  />
                  <Text>{product.title}</Text>
                  <Text>
                    {currencyFormatter({price: product.price, currency: 'CLP'})}
                  </Text>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    colorScheme={'blue'}
                  >
                    Agregar
                  </Button>
                </Stack>
              ))
            : null}
        </Grid>
        {Boolean(cart.length) && (
          <Button
            onClick={() => toggleCart(true)}
            colorScheme="whatsapp"
            width="fit-content"
          >
            Ver pedido
          </Button>
        )}
      </Stack>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        size="md"
        onClose={() => toggleCart(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <List>
              {cart.map(product => (
                <ListItem key={product.id}>
                  {product.title} -{' '}
                  {currencyFormatter({price: product.price, currency: 'CLP'})}
                </ListItem>
              ))}
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" onClick={() => toggleCart(false)}>
              Cancel
            </Button>
            <Button
              as={Link}
              size={'lg'}
              width={'100%'}
              ml={5}
              colorScheme="whatsapp"
              href={`https://wa.me/+56994738551?text=${text}`}
            >
              Completar pedido ({cart.length}) productos
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Component.Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    props: {
      products: products,
    },
    revalidate: 1,
  };
};

export default IndexRoute;
